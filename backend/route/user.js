const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

// route d'identifiant avec l'ID
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
// route du véhicule de l'user
router.get("/:id/vehicle", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des informations du vehicules
  connection.query(
    `SELECT date, annee, marque,modele,motorisation,puissance
    FROM MODELE_VOITURE
    INNER JOIN EXEMPLAIRE_VOITURE
    ON MODELE_VOITURE.id = EXEMPLAIRE_VOITURE.id_modele_voiture
    INNER JOIN Exemplaire_voiture_User
    ON EXEMPLAIRE_VOITURE.id = Exemplaire_voiture_User.id_exemplaire_voiture
    WHERE id_user=?  
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
