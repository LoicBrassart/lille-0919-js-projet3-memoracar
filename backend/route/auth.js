//component route to allowing user to sign up or log in

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../passport-strategies");
const { jwtSecret, saltRounds, connection } = require("../conf");
const bcrypt = require("bcrypt");

// route to check if the user already exists, if no it create the new user and return to the frontEnd id of the user, mail and token.
router.post("/signup", (req, res) => {
  const formData = req.body;
  const hash = bcrypt.hashSync(formData.password, saltRounds);
  formData.password = hash;
  connection.query(
    `SELECT mail FROM USER WHERE mail = ?`,
    [formData.mail],
    (err, results) => {
      if (err) return res.status(500).send("error");
      if (results.length) return res.status(409).send("email already used");
      connection.query(
        `
          INSERT INTO USER
          SET ?
          `,
        formData,
        (err, results) => {
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            return res.status(500).send("Invalid User creation request");
          } else {
            // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
            const returnData = {
              id: results.insertId,
              mail: formData.mail
            };
            const token = jwt.sign(returnData, jwtSecret);
            return res.status(201).json({ returnData, token });
          }
        }
      );
    }
  );
});

//route to check if the user exists and if we have the good password, and return to FrontEnd the user mail, id, and token
router.post("/login", (req, res) => {
  passport.authenticate(
    "local",
    { session: false },
    (errAuth, user, infoAuth) => {
      if (errAuth)
        return res.status(500).json({
          tldr: "Tech error!",
          details: errAuth,
          message: infoAuth
        });
      if (!user)
        return res.status(401).json({
          tldr: "Form error!",
          details: "Either mail or password is incorrect",
          message: infoAuth
        });
      connection.query(
        `SELECT id_exemplaire_voiture, date, annee, marque,modele,motorisation,puissance,km
          FROM MODELE_VOITURE
          INNER JOIN EXEMPLAIRE_VOITURE
          ON MODELE_VOITURE.id = EXEMPLAIRE_VOITURE.id_modele_voiture
          INNER JOIN Exemplaire_voiture_User
          ON EXEMPLAIRE_VOITURE.id = Exemplaire_voiture_User.id_exemplaire_voiture
          WHERE id_user=?`,
        [user.id],
        (err, results) => {
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            res.status(500).send("Error in vehicles of user");
          } else {
            // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
            const token = jwt.sign(user, jwtSecret);
            user.carData = results[0];
            return res.status(200).json({ user, token });
          }
        }
      );
    }
  )(req, res);
});

module.exports = router;
