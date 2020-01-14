const express = require("express");
const { connection } = require("../conf");
const router = express.Router();
require("../passport-strategies");

// route d'identifiant avec l'ID
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT password, mail
    FROM USER 
    WHERE id=?`,
    id,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in user");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});
// route du véhicule de l'identifiant
router.get("/user/:id/vehicle", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des vehicules
  connection.query(
    `SELECT vehicle.plate, brand, model, motorisation, horse_power, current_mileage, created_at, production_year, date_mileage
      FROM 
        vehicle 
        JOIN users_has_vehicules ON vehicle.id=users_has_vehicules.id_vehicle 
      WHERE id_user=?`,

    id,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in vehicles of user");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

// route des entretiens a faire sur pneus sur le vehicule de l'user
router.get("/:id/vehicle/nextmaintenance", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des informations du vehicules
  connection.query(
    `SELECT plan_maintenance_interventions.*, INTERVENTION.*
    FROM EXEMPLAIRE_VOITURE
    INNER JOIN MODELE_VOITURE ON EXEMPLAIRE_VOITURE.id_modele_voiture = MODELE_VOITURE.id 
    INNER JOIN PLAN_MAINTENANCE ON MODELE_VOITURE.id = PLAN_MAINTENANCE.id_modele_voiture
    INNER JOIN plan_maintenance_interventions ON PLAN_MAINTENANCE.id = plan_maintenance_interventions.id_plan_maintenance
    INNER JOIN INTERVENTION ON plan_maintenance_interventions.id_intervention = INTERVENTION.id
    WHERE EXEMPLAIRE_VOITURE.id = ?
    AND plan_maintenance_interventions.km_periodicite > EXEMPLAIRE_VOITURE.km
    AND INTERVENTION.famille = 'pneus'
    ORDER BY plan_maintenance_interventions.km_periodicite  
      `,
    id,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in vehicles of user");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

module.exports = router;
