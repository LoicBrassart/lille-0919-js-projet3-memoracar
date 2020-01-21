const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

//route pour récuperer tous les modèles
router.get("/:modeles", (req, res) => {
  const modele = req.body;
  connection.query(
    `SELECT marque, modele, motorisation, puissance
FROM MODELE_VOITURE`,
    modele,
    (err, results) => {
      if (err) {
        // Si erreur
        res.status(500).send("Error in modèle");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

router.post("/newcar", (req, res) => {
  const newCar = req.body;
  connection.query(
    `INSERT INTO EXEMPLAIRE_VOITURE (vin, plaque, km, annee)
     VALUES ('vin', 'immatriculation', 'kilometrage', 'annee')
     WHERE id_modele_voiture = ?
     
    `,
    newCar,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.error("Failure! " + err);
        return res.status(400).send("Invalid vehicule registration");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

module.exports = router;
