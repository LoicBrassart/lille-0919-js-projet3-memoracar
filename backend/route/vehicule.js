const express = require("express");
const { connection } = require("../conf");
const router = express.Router();
const passport = require("passport");

router.use((req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) return res.status(500).send(error, info);
    if (!user) return res.status(401).send("Unauthorized");
    next();
  })(req, res);
});

// route du plan de maintenance du vehicule de l'user
router.get("/:id/nextmaintenance", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des informations du vehicules
  connection.query(
    `SELECT plan_maintenance_interventions.km_periodicite , INTERVENTION.famille,INTERVENTION.sousFamille, INTERVENTION.elements, EXEMPLAIRE_VOITURE.km
    FROM EXEMPLAIRE_VOITURE
    INNER JOIN MODELE_VOITURE ON EXEMPLAIRE_VOITURE.id_modele_voiture = MODELE_VOITURE.id 
    INNER JOIN PLAN_MAINTENANCE ON MODELE_VOITURE.id = PLAN_MAINTENANCE.id_modele_voiture
    INNER JOIN plan_maintenance_interventions ON PLAN_MAINTENANCE.id = plan_maintenance_interventions.id_plan_maintenance
    INNER JOIN INTERVENTION ON plan_maintenance_interventions.id_intervention = INTERVENTION.id
    WHERE EXEMPLAIRE_VOITURE.id = ?
    ORDER BY plan_maintenance_interventions.km_periodicite  
      `,
    id,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in vehicles of user");
      }
      const listNextMaintenance = [];
      results.forEach(element => {
        const prochaineEcheancePourcentage =
          (element.km_periodicite - (element.km % element.km_periodicite)) /
          element.km_periodicite;
        const prochaineEcheance =
          element.km_periodicite - (element.km % element.km_periodicite);
        listNextMaintenance.push({
          famille: element.famille,
          sousFamille: element.sousFamille,
          elements: element.elements,
          periodicite: element.km_periodicite,
          prochaineEcheancePourcentage,
          prochaineEcheance
        });
      });
      res.json(listNextMaintenance);
    }
  );
});

router.put("/:id", (req, res) => {
  const idVehicle = req.params.id;
  const km = req.body.km;
  const date = req.body.date;
  connection.query(
    `UPDATE EXEMPLAIRE_VOITURE 
    SET km = ?,
    date = ?
    WHERE id = ?`,
    [km, date, idVehicle],
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Error while updating data");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.status(200).send("Update done");
      }
    }
  );
});

// route de l'historique du vehicule de l'user
router.get("/:id/historique", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des informations du vehicules
  connection.query(
    `SELECT date, km, elements, famille, sousFamille,nom, franchise 
    FROM ENTRETIEN_FAIT
    INNER JOIN intervention_entretien_fait ON ENTRETIEN_FAIT.id_exemplaire_voiture = intervention_entretien_fait.id_entretien_fait
    INNER JOIN INTERVENTION ON intervention_entretien_fait.id_intervention = INTERVENTION.id
    INNER JOIN entretien_fait_garage ON ENTRETIEN_FAIT.id=entretien_fait_garage.id_entretien_fait
    INNER JOIN GARAGE ON entretien_fait_garage.id_garage = GARAGE.id
    WHERE id_exemplaire_voiture = ?;`,
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
