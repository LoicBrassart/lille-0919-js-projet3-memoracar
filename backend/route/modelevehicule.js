const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

//route du modèle de voiture
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT marque,modele,motorisation,puissance
    FROM MODELE_VOITURE 
    WHERE id=?`,
    id,
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
