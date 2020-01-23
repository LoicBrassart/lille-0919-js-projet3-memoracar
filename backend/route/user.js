const express = require("express");
const { connection, saltRounds } = require("../conf");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
require("../passport-strategies");

router.use((req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) return res.status(500).send(error, info);
    if (!user) return res.status(401).send("Unauthorized");
    next();
  })(req, res);
});

router.get("/:id", (req, res) => {
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
router.get("/:id/vehicle", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des vehicules
  connection.query(
    `SELECT id_exemplaire_voiture, date, annee, marque,modele,motorisation,puissance,km
    FROM MODELE_VOITURE
    INNER JOIN EXEMPLAIRE_VOITURE
    ON MODELE_VOITURE.id = EXEMPLAIRE_VOITURE.id_modele_voiture
    INNER JOIN Exemplaire_voiture_User
    ON EXEMPLAIRE_VOITURE.id = Exemplaire_voiture_User.id_exemplaire_voiture
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

router.put("/:id/changepw", (req, res) => {
  const formData = req.body;
  const userId = parseInt(req.params.id);

  connection.query(
    `SELECT password FROM USER WHERE id =?`,
    userId,
    (err, results) => {
      if (err) {
        return res.status(500).send("Error while fetching user!");
      } else {
        const isPrevPwMatch = bcrypt.compareSync(
          formData.prevPw,
          results[0].password
        );
        if (isPrevPwMatch) {
          bcrypt.hash(formData.newPw, parseInt(saltRounds), (err, hash) => {
            if (err) {
              console.error(err);
              return res.status(500).send("Error while updating password");
            }

            formData.newPw = hash;
            connection.query(
              `UPDATE USER SET password = ? WHERE id = ?`,
              [formData.newPw, userId],
              (err, results) => {
                if (err) {
                  // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
                  console.error("Failure! " + err);
                  return res.status(400).send("Invalid update");
                } else {
                  return res.status(201).send("Update done!");
                }
              }
            );
          });
        }
      }
    }
  );
});

module.exports = router;
