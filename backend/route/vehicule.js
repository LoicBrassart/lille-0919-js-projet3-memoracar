//component to get and change info of the car

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

// route of the user's vehicle maintenance plan
router.get("/:id/nextmaintenance", (req, res) => {
  const id = req.params.id;
  // connection to the database, and selection of vehicle information
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
        // If an error has occurred, then the user is informed of the error
        res.status(500).send("Error in vehicles of user");
      }

      //If everything went well, we make the second SQL request
      connection.query(
        `select ENTRETIEN_FAIT.km AS km_entretien, INTERVENTION.famille, INTERVENTION.sousFamille, INTERVENTION.elements
        from
 	      ENTRETIEN_FAIT
          inner join intervention_entretien_fait on intervention_entretien_fait.id_entretien_fait=ENTRETIEN_FAIT.id
 	        inner join INTERVENTION on INTERVENTION.id=intervention_entretien_fait.id_intervention
          inner join EXEMPLAIRE_VOITURE on ENTRETIEN_FAIT.id_exemplaire_voiture=EXEMPLAIRE_VOITURE.id
        WHERE EXEMPLAIRE_VOITURE.id=?
        ORDER BY km_entretien DESC;`,
        id,
        (err, results2) => {
          if (err) {
            // If an error has occurred, then the user is informed of the error
            res.status(500).send("Error in vehicles of user");
          }

          // Creating an empty table
          const listNextMaintenance = [];

          // remove duplicates
          results.forEach(element => {
            const entretienFait = results2.find(
              elt =>
                elt.famille === element.famille &&
                elt.sousFamille === element.sousFamille &&
                elt.elements === element.elements
            );

            //the algorithm to determine the next deadline if there has been an interview done
            let prochaineEcheance;
            if (entretienFait) {
              prochaineEcheance =
                entretienFait.km_entretien +
                element.km_periodicite -
                element.km;

              //the algorithm to determine the next deadline if there has been no maintenance done
            } else {
              prochaineEcheance =
                (element.km_periodicite - element.km) % element.km_periodicite;
            }

            // calculates it which determines the journey made in percentage compared to the next deadline
            const trajetFaitPourcentage =
              (element.km_periodicite - prochaineEcheance) /
              element.km_periodicite;

            //element sent in the empty array.
            listNextMaintenance.push({
              famille: element.famille,
              sousFamille: element.sousFamille,
              elements: element.elements,
              periodicite: element.km_periodicite,
              trajetFaitPourcentage,
              prochaineEcheance
            });
          });
          res.json(listNextMaintenance);
        }
      );
    }
  );
});

//route to update the mileAge of the car
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
        //If an error has occurred, then the user is informed of the error
        res.status(500).send("Error while updating data");
      } else {
        // If everything went well, we send the result of the SQL request as JSON.
        res.status(200).send("Update done");
      }
    }
  );
});

// route to get past intervention
router.get("/:id/historique", (req, res) => {
  const id = req.params.id;
  // connection to the database, and selection of vehicle information
  connection.query(
    `SELECT date, km, elements, famille, sousFamille,nom, franchise, date_format(date, "%d %m %Y") as date_format  
    FROM ENTRETIEN_FAIT
    INNER JOIN intervention_entretien_fait ON ENTRETIEN_FAIT.id = intervention_entretien_fait.id_entretien_fait
    INNER JOIN INTERVENTION ON intervention_entretien_fait.id_intervention = INTERVENTION.id
    LEFT JOIN entretien_fait_garage ON ENTRETIEN_FAIT.id=entretien_fait_garage.id_entretien_fait
    LEFT JOIN GARAGE ON entretien_fait_garage.id_garage = GARAGE.id
     WHERE id_exemplaire_voiture = ?;`,
    id,
    (err, results) => {
      if (err) {
        //If an error has occurred, then the user is informed of the error
        res.status(500).send("Error in vehicles of user");
      } else {
        // If everything went well, we send the result of the SQL request as JSON.
        res.json(results);
      }
    }
  );
});

module.exports = router;
