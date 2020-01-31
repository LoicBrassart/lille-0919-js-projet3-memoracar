CREATE DATABASE  IF NOT EXISTS `memoracar` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `memoracar`;
-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: 51.68.18.111    Database: memoracar
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ENTRETIEN_FAIT`
--

DROP TABLE IF EXISTS `ENTRETIEN_FAIT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ENTRETIEN_FAIT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_exemplaire_voiture` int(11) NOT NULL,
  `date` date NOT NULL,
  `km` int(11) NOT NULL,
  `pro` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ENTRETIEN_FAIT_1_idx` (`id_exemplaire_voiture`),
  CONSTRAINT `fk_ENTRETIEN_FAIT_1` FOREIGN KEY (`id_exemplaire_voiture`) REFERENCES `EXEMPLAIRE_VOITURE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ENTRETIEN_FAIT`
--

LOCK TABLES `ENTRETIEN_FAIT` WRITE;
/*!40000 ALTER TABLE `ENTRETIEN_FAIT` DISABLE KEYS */;
INSERT INTO `ENTRETIEN_FAIT` VALUES (1,1,'2018-10-14',20000,1),(2,2,'2009-07-17',14784,1),(3,2,'2019-10-14',25000,1),(4,2,'2017-10-14',10000,1),(5,2,'2016-10-14',5000,1),(6,2,'2014-10-23',2500,1),(7,81,'2018-10-11',15000,1),(8,81,'2019-11-07',26340,1),(9,81,'2019-12-20',32160,1),(10,81,'2020-01-18',46237,1),(11,81,'2020-01-27',52154,1);
/*!40000 ALTER TABLE `ENTRETIEN_FAIT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EXEMPLAIRE_VOITURE`
--

DROP TABLE IF EXISTS `EXEMPLAIRE_VOITURE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EXEMPLAIRE_VOITURE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_modele_voiture` int(11) NOT NULL,
  `vin` varchar(45) NOT NULL,
  `plaque` varchar(45) NOT NULL,
  `km` int(11) NOT NULL,
  `annee` varchar(45) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_EXEMPLAIRE_VOITURE_1_idx` (`id_modele_voiture`),
  CONSTRAINT `fk_EXEMPLAIRE_VOITURE_1` FOREIGN KEY (`id_modele_voiture`) REFERENCES `MODELE_VOITURE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EXEMPLAIRE_VOITURE`
--

LOCK TABLES `EXEMPLAIRE_VOITURE` WRITE;
/*!40000 ALTER TABLE `EXEMPLAIRE_VOITURE` DISABLE KEYS */;
INSERT INTO `EXEMPLAIRE_VOITURE` VALUES (1,1,'VF7SBHMZ0EW554823','XX-123-YY',25600,'2004','2020-01-26'),(2,2,'VT7SBHYE0EW559780','ZZ-456-AA',5000,'2010','2020-01-25'),(3,3,'VQ7SBHMZ0KL904900','BB-789-CC',2500,'2002','2020-01-27'),(81,2,'VF12RFL1H99078\'22','XX-456-YY',53167,'2011','2020-01-24'),(84,1,'aaaaaaaaaaaaaaaaa','AZ-123-ER',1000,'2018','2020-01-28'),(85,1,'aaaaaaaaaaaaaaaaa','AZ-123-ER',150000,'2018','2020-01-28'),(86,1,'aaaaaaaaaaaaaaaaa','AZ-123-ER',12345,'2018','2020-01-28');
/*!40000 ALTER TABLE `EXEMPLAIRE_VOITURE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exemplaire_voiture_User`
--

DROP TABLE IF EXISTS `Exemplaire_voiture_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Exemplaire_voiture_User` (
  `id_exemplaire_voiture` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  KEY `fk_Exemplaire_voiture_User_1_idx` (`id_exemplaire_voiture`),
  KEY `fk_Exemplaire_voiture_User_2_idx` (`id_user`),
  CONSTRAINT `fk_Exemplaire_voiture_User_1` FOREIGN KEY (`id_exemplaire_voiture`) REFERENCES `EXEMPLAIRE_VOITURE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exemplaire_voiture_User_2` FOREIGN KEY (`id_user`) REFERENCES `USER` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exemplaire_voiture_User`
--

LOCK TABLES `Exemplaire_voiture_User` WRITE;
/*!40000 ALTER TABLE `Exemplaire_voiture_User` DISABLE KEYS */;
INSERT INTO `Exemplaire_voiture_User` VALUES (1,1),(2,19),(3,69),(81,101),(84,109),(86,112);
/*!40000 ALTER TABLE `Exemplaire_voiture_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GARAGE`
--

DROP TABLE IF EXISTS `GARAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GARAGE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `franchise` varchar(45) DEFAULT NULL,
  `nom` varchar(45) NOT NULL,
  `adresse` varchar(145) NOT NULL,
  `telephone` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GARAGE`
--

LOCK TABLES `GARAGE` WRITE;
/*!40000 ALTER TABLE `GARAGE` DISABLE KEYS */;
INSERT INTO `GARAGE` VALUES (1,'Norauto','Faches thumesnil','rue de l\'égalité prolongee 59155 FACHES',320160544),(2,'Ford','Eurocarland','20 Avenue de la Résistance 59350 Saint-André-lez-Lille',320406718);
/*!40000 ALTER TABLE `GARAGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `INTERVENTION`
--

DROP TABLE IF EXISTS `INTERVENTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `INTERVENTION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `famille` enum('moteur','pneus','chassis','electricite','echappement','freins','carrosserie','controle technique') NOT NULL,
  `sousFamille` varchar(45) NOT NULL,
  `elements` varchar(90) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `INTERVENTION`
--

LOCK TABLES `INTERVENTION` WRITE;
/*!40000 ALTER TABLE `INTERVENTION` DISABLE KEYS */;
INSERT INTO `INTERVENTION` VALUES (1,'moteur','vidange','Faire la vidange'),(2,'freins','plaquette','Controle et/ou remplacement des plaquettes de frein'),(3,'freins','disque','Controle et/ou remplacement des disques de frein'),(44,'freins','autre','Remplacement du liquide de frein'),(45,'moteur','piece thermique','Remplacement du liquide de refroidissement'),(46,'moteur','boite de vitesse','Vidange boite de vitesse à surveiller'),(47,'moteur','filtre','Remplacement filtre à huile (moteur diesel / moteur essence)'),(48,'moteur','filtre','Remplacement filtre à carburant (essence / gazole)'),(49,'moteur','filtre','Remplacement filtre à air'),(50,'freins','disque','Controle et/ou remplacement tambour de frein'),(51,'electricite','autre','Controle des feux et éclairages à surveiller'),(52,'electricite','autre','Remplacement des bougies d\'allumage / bougies de préchauffage'),(53,'electricite','demarreur','Contrôle du démarreur à surveiller'),(54,'electricite','alternateur','Contrôle de l\'alternateur à surveiller'),(55,'chassis','autre','Contrôle des roulements de roue'),(56,'chassis','autre','Contrôle des rotules de direction et suspension'),(57,'echappement','echappement','Contrôle du pot d\'échappement à surveiller'),(58,'moteur','autre','Remplacement de la courroie de distribution'),(59,'moteur','autre','Remplacement de la courroie accessoires'),(60,'moteur','autre','Cardans à surveiller'),(61,'pneus','pneus','Changement de pneus avant'),(62,'pneus','pneus','Changement de pneus arrière'),(63,'electricite','batterie','Contrôle de la batterie'),(64,'controle technique','controle technique','Contrôle technique'),(65,'moteur','climatisation','Contrôle et recharge de la climatisation'),(66,'carrosserie','autre','Points de corrosion à surveiller');
/*!40000 ALTER TABLE `INTERVENTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MODELE_VOITURE`
--

DROP TABLE IF EXISTS `MODELE_VOITURE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MODELE_VOITURE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marque` varchar(45) NOT NULL,
  `modele` varchar(45) NOT NULL,
  `motorisation` varchar(45) NOT NULL,
  `puissance` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MODELE_VOITURE`
--

LOCK TABLES `MODELE_VOITURE` WRITE;
/*!40000 ALTER TABLE `MODELE_VOITURE` DISABLE KEYS */;
INSERT INTO `MODELE_VOITURE` VALUES (1,'RENAULT','LAGUNA','2.0 DCI',130),(2,'FORD','FIESTA','1.0 ECOBOOST',100),(3,'TOYOTA','AVENSIS','2.0 D4D',116);
/*!40000 ALTER TABLE `MODELE_VOITURE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PLAN_MAINTENANCE`
--

DROP TABLE IF EXISTS `PLAN_MAINTENANCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PLAN_MAINTENANCE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_modele_voiture` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PLAN_MAINTENANCE_1_idx` (`id_modele_voiture`),
  CONSTRAINT `fk_PLAN_MAINTENANCE_1` FOREIGN KEY (`id_modele_voiture`) REFERENCES `MODELE_VOITURE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PLAN_MAINTENANCE`
--

LOCK TABLES `PLAN_MAINTENANCE` WRITE;
/*!40000 ALTER TABLE `PLAN_MAINTENANCE` DISABLE KEYS */;
INSERT INTO `PLAN_MAINTENANCE` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `PLAN_MAINTENANCE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USER` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(145) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'jean@wild.com','$2b$08$V1S.Fp/rlKP79KdtliRDuuk.t2T.CeY78Tp/aiSYUya3W/0gLV9Z.'),(19,'toto@ex.com','$2b$08$Dw2z/./aAc7EiVcEaEH.mOMmFAVdObQ16tzrOPWZ623pjv6jD6YVC'),(69,'tata2@ex.com','$2b$08$BZBAze/EYIJwSqwb2mOGYeVTdtiZ6C1Kb.Cx5tX6mcQ2yp4SCuKxK'),(101,'samuel@wild.com','$2b$08$wG4OCRhams97tTTXyKkrZORe.xj7Ndtee1LISw616uZiDSAu9gbQ6'),(109,'alain@proviste.com','$2b$08$Lxdf52F8YTNrasnrvz78eu0fp4amGn.Xw3sDLq/c7Vi60AvLbamOe'),(110,'pouet@mail.com','$2b$08$ODJyux6mE2YBgOBq5lsGveSg16X2cmcH8HaPCqJikici310RuI9Ea'),(111,'jeanMich@wild.com','$2b$08$n/cm8F47Igkuw6eYIAZ8CeaeitOa1eXcdvonl0KYEERsfH.Mek3Py'),(112,'mercedes@janine.com','$2b$08$jPSXqubvvShV4ZXaMPscWe9LPS92L4l092gX.jcDlS9AamSNEZeJu');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entretien_fait_garage`
--

DROP TABLE IF EXISTS `entretien_fait_garage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entretien_fait_garage` (
  `id_entretien_fait` int(11) NOT NULL,
  `id_garage` int(11) NOT NULL,
  KEY `fk_entretien_fait_garage_1_idx` (`id_entretien_fait`),
  KEY `fk_entretien_fait_garage_2_idx` (`id_garage`),
  CONSTRAINT `fk_entretien_fait_garage_1` FOREIGN KEY (`id_entretien_fait`) REFERENCES `ENTRETIEN_FAIT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_entretien_fait_garage_2` FOREIGN KEY (`id_garage`) REFERENCES `GARAGE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entretien_fait_garage`
--

LOCK TABLES `entretien_fait_garage` WRITE;
/*!40000 ALTER TABLE `entretien_fait_garage` DISABLE KEYS */;
INSERT INTO `entretien_fait_garage` VALUES (1,1),(2,1),(3,1),(7,1),(8,2),(9,1),(10,1),(11,2);
/*!40000 ALTER TABLE `entretien_fait_garage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention_entretien_fait`
--

DROP TABLE IF EXISTS `intervention_entretien_fait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `intervention_entretien_fait` (
  `id_entretien_fait` int(11) NOT NULL,
  `id_intervention` int(11) NOT NULL,
  KEY `fk_intervention_entretien_fait_1_idx` (`id_intervention`),
  KEY `fk_intervention_entretien_fait_2_idx` (`id_entretien_fait`),
  CONSTRAINT `fk_intervention_entretien_fait_1` FOREIGN KEY (`id_intervention`) REFERENCES `INTERVENTION` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_intervention_entretien_fait_2` FOREIGN KEY (`id_entretien_fait`) REFERENCES `ENTRETIEN_FAIT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention_entretien_fait`
--

LOCK TABLES `intervention_entretien_fait` WRITE;
/*!40000 ALTER TABLE `intervention_entretien_fait` DISABLE KEYS */;
INSERT INTO `intervention_entretien_fait` VALUES (1,61),(2,1),(2,1),(2,62),(2,2),(2,3),(2,1),(2,63),(4,65),(4,45),(4,46),(5,64),(2,51),(2,51),(2,51),(2,51),(3,52),(6,64),(2,57),(2,57),(2,55),(2,56),(7,1),(7,47),(8,2),(8,51),(8,57),(8,64),(9,1),(9,47),(9,61),(10,51),(10,53),(10,54),(10,57),(10,60),(11,1),(11,44),(11,45),(11,46),(11,47),(11,48),(11,49),(11,3),(11,50),(11,55),(11,56),(11,62),(11,2);
/*!40000 ALTER TABLE `intervention_entretien_fait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_maintenance_interventions`
--

DROP TABLE IF EXISTS `plan_maintenance_interventions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plan_maintenance_interventions` (
  `id_plan_maintenance` int(11) NOT NULL,
  `id_intervention` int(11) NOT NULL,
  `km_periodicite` int(11) NOT NULL,
  PRIMARY KEY (`id_intervention`,`id_plan_maintenance`),
  KEY `fk_KM_Periodicité_1_idx` (`id_plan_maintenance`),
  KEY `fk_KM_Periodicité_2_idx` (`id_intervention`),
  CONSTRAINT `fk_KM_Periodicité_1` FOREIGN KEY (`id_plan_maintenance`) REFERENCES `PLAN_MAINTENANCE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_KM_Periodicité_2` FOREIGN KEY (`id_intervention`) REFERENCES `INTERVENTION` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_maintenance_interventions`
--

LOCK TABLES `plan_maintenance_interventions` WRITE;
/*!40000 ALTER TABLE `plan_maintenance_interventions` DISABLE KEYS */;
INSERT INTO `plan_maintenance_interventions` VALUES (1,1,20000),(2,1,15000),(3,1,20000),(1,2,30000),(2,2,25000),(3,2,30000),(1,3,50000),(2,3,50000),(3,3,40000),(1,44,50000),(2,44,50000),(3,44,50000),(1,45,50000),(2,45,50000),(3,45,50000),(1,46,50000),(2,46,50000),(3,46,50000),(1,47,20000),(2,47,15000),(3,47,20000),(1,48,50000),(2,48,50000),(3,48,50000),(1,49,50000),(2,49,50000),(3,49,50000),(1,50,50000),(2,50,50000),(3,50,40000),(1,51,50000),(2,51,7500),(3,51,7500),(1,52,120000),(2,52,150000),(3,52,180000),(1,53,30000),(2,53,40000),(3,53,40000),(1,54,30000),(2,54,40000),(3,54,40000),(1,55,50000),(2,55,50000),(3,55,50000),(1,56,50000),(2,56,50000),(3,56,50000),(1,57,30000),(2,57,100000),(3,57,100000),(1,58,120000),(2,58,150000),(3,58,180000),(1,59,120000),(2,59,150000),(3,59,180000),(1,60,50000),(2,60,40000),(3,60,40000),(1,61,30000),(2,61,30000),(3,61,30000),(1,62,50000),(2,62,50000),(3,62,50000),(1,64,50000),(2,64,50000),(3,64,50000),(1,66,50000);
/*!40000 ALTER TABLE `plan_maintenance_interventions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-28 10:56:40
