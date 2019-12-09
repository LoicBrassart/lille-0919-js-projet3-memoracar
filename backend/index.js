const connection = require("./conf");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
// route d'identifiant avec l'ID
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM user WHERE id=?", id, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send("Error");
    } else {
      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});
// route du véhicule de l'identifiant
app.get("/user/:id/vehicle", (req, res) => {
  const id = req.params.id;
  // connection à la base de données, et sélection des vehicules
  connection.query(
    `SELECT vehicle.* 
    FROM 
      vehicle 
      JOIN users_has_vehicules ON vehicle.id=users_has_vehicules.id_vehicle 
    WHERE id_user=?`,
    id,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error");
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});

/* SELECT *,
date_format(created_at, "%Y"),
date_format(date_mileage,"%Y %m %e"),
date_format(production_year,"%Y")
FROM vehicle

modifier l'affichage de ma requete */
