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

module.exports = router;
