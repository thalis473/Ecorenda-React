CREATE DATABASE  IF NOT EXISTS `ecorenda` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ecorenda`;
-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: ecorenda
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

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
-- Table structure for table `agendamentos`
--

DROP TABLE IF EXISTS `agendamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendamentos` (
  `idAgendamento` int(11) NOT NULL AUTO_INCREMENT,
  `fk_doador` int(11) DEFAULT NULL,
  `fk_catador` int(11) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `hora` varchar(8) DEFAULT NULL,
  `material` varchar(15) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `fk_localizacao` int(11) DEFAULT NULL,
  `status` varchar(15) DEFAULT 'PENDENTE',
  PRIMARY KEY (`idAgendamento`),
  KEY `fk_doador` (`fk_doador`),
  KEY `fk_catador` (`fk_catador`),
  KEY `fk_localizacao` (`fk_localizacao`),
  CONSTRAINT `fk_catador` FOREIGN KEY (`fk_catador`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_doador` FOREIGN KEY (`fk_doador`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_localizacao` FOREIGN KEY (`fk_localizacao`) REFERENCES `enderecos` (`idE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamentos`
--

LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluminio`
--

DROP TABLE IF EXISTS `aluminio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluminio` (
  `idAluminio` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `descricao` varchar(30) DEFAULT 'não especificado',
  `peso` decimal(5,3) DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT 0.00,
  PRIMARY KEY (`idAluminio`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `aluminio_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluminio`
--

LOCK TABLES `aluminio` WRITE;
/*!40000 ALTER TABLE `aluminio` DISABLE KEYS */;
INSERT INTO `aluminio` VALUES (2,1,'Latinhas de coca',0.500,8.50);
/*!40000 ALTER TABLE `aluminio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cobre`
--

DROP TABLE IF EXISTS `cobre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cobre` (
  `idCobre` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `descricao` varchar(30) DEFAULT 'não especificado',
  `peso` decimal(5,3) DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT 0.00,
  PRIMARY KEY (`idCobre`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `cobre_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cobre`
--

LOCK TABLES `cobre` WRITE;
/*!40000 ALTER TABLE `cobre` DISABLE KEYS */;
INSERT INTO `cobre` VALUES (2,1,'Não tem',12.500,28.50);
/*!40000 ALTER TABLE `cobre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enderecos` (
  `idE` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `cep` varchar(16) DEFAULT '00000-000',
  `estado` varchar(2) DEFAULT 'na',
  `bairro` varchar(50) DEFAULT 'não cadastrado',
  `rua` varchar(60) DEFAULT 'não cadastrado',
  `num` int(11) DEFAULT 0,
  `complemento` varchar(100) DEFAULT 'nenhum complemento',
  PRIMARY KEY (`idE`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (2,1,'00000-000','rj','Boa esperança','George Sand',121,'nenhum complemento'),(3,2,'00000-000','rj','Nova Iguaçu','Av. Gov Amaral Peixoto',806,NULL),(4,2,'00000-000','rj','Nova Iguaçu','Av. Gov Amaral Peixoto',806,NULL),(5,3,'00000-000','rj','Jardim Alvorada','Rua Alvorada',50,'Não tem'),(6,3,'00000-000','rj','Jardim Alvorada','Rua alta',87,'Apto 305'),(7,4,'00000-000','rj','Jardim Alvorada','Rua alta',87,'Apto 305');
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritos` (
  `idFav` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `fk_favoritoId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFav`),
  KEY `usuarioId` (`usuarioId`),
  KEY `fk_favoritoId` (`fk_favoritoId`),
  CONSTRAINT `fk_favoritoId` FOREIGN KEY (`fk_favoritoId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `usuarioId` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback` (
  `idFeed` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `msg` longtext DEFAULT NULL,
  PRIMARY KEY (`idFeed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais`
--

DROP TABLE IF EXISTS `materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiais` (
  `idM` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `fk_aluminioId` int(11) DEFAULT NULL,
  `fk_cobreId` int(11) DEFAULT NULL,
  `fk_plasticoId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idM`),
  KEY `fk_aluminioId` (`fk_aluminioId`),
  KEY `fk_cobreId` (`fk_cobreId`),
  KEY `fk_plasticoId` (`fk_plasticoId`),
  CONSTRAINT `fk_aluminioId` FOREIGN KEY (`fk_aluminioId`) REFERENCES `aluminio` (`idAluminio`),
  CONSTRAINT `fk_cobreId` FOREIGN KEY (`fk_cobreId`) REFERENCES `cobre` (`idCobre`),
  CONSTRAINT `fk_plasticoId` FOREIGN KEY (`fk_plasticoId`) REFERENCES `plastico` (`idPlastico`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais`
--

LOCK TABLES `materiais` WRITE;
/*!40000 ALTER TABLE `materiais` DISABLE KEYS */;
INSERT INTO `materiais` VALUES (1,1,2,2,1);
/*!40000 ALTER TABLE `materiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plastico`
--

DROP TABLE IF EXISTS `plastico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plastico` (
  `idPlastico` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `descricao` varchar(30) DEFAULT 'não especificado',
  `peso` decimal(5,3) DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT 0.00,
  PRIMARY KEY (`idPlastico`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `plastico_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plastico`
--

LOCK TABLES `plastico` WRITE;
/*!40000 ALTER TABLE `plastico` DISABLE KEYS */;
INSERT INTO `plastico` VALUES (1,1,'Garrafa pet',1.500,4.50);
/*!40000 ALTER TABLE `plastico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `atribuicao` varchar(30) DEFAULT 'catador',
  `celular` varchar(16) DEFAULT 'não cadastrado',
  `telefone` varchar(16) DEFAULT 'não cadastrado',
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `descricao` varchar(255) DEFAULT 'breve descrição do usuário',
  `dataCad` date DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Robson','catador','não cadastrado','não cadastrado','rob@gmail.com','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','breve descrição do usuário','2021-03-04'),(2,'Equipe Ecorenda','adm','não cadastrado','não cadastrado','adm@ecorenda.com','2f9e41ab64f24f1de95795cc833bf47df06fcb17','breve descrição do usuário','2021-03-04'),(3,'Grande Rio','estabelecimento','não cadastrado','não cadastrado','coopgranderio@gmail.com','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','breve descrição do usuário','2021-03-06'),(4,'Guilherme','doador','não cadastrado','não cadastrado','gui@gmail.com','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','breve descrição do usuário','2021-03-06');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-08 10:23:53
