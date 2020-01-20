const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

//route du modèle de voiture
router.get("/:marque", (req, res) => {
  const modele = req.params.id;
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

router.post("/SelectCar", (req, res) => {
  // récupération des données envoyées
  const formData = req.body;

  // connexion à la base de données, et insertion du véhicule
  connection.query(
    `INSERT INTO EXEMPLAIRE_VOITURE SET ?`,
    formData,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.error("Failure! " + err);
        res.status(500).send("Erreur lors de l'ajout d'un véhicule");
      } else {
        // Si tout s'est bien passé, on envoie les données.
        res.status(200).json(formData);
      }
    }
  );
});

module.exports = router;
