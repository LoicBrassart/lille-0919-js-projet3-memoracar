const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

//route du modèle de voiture
router.get("/:marque", (req, res) => {
  const modele = req.params.id;
  connection.query(
    `SELECT id, marque, modele, motorisation, puissance
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

module.exports = router;
