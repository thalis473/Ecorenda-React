CREATE DATABASE  IF NOT EXISTS `ecorenda2` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ecorenda2`;
-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: ecorenda2
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,1,'20775-410','rj','cachambi','Rua cachambi',298,NULL),(2,2,NULL,'rj','Miguel Couto','M couto',250,NULL),(3,16,NULL,'rj','Miguel Couto','São joão',80,NULL);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
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
  `nomeAluminio` varchar(30) DEFAULT 'não especificado',
  `tipoAluminio` varchar(30) DEFAULT 'aluminio',
  `pesoAluminio` decimal(5,3) DEFAULT NULL,
  `valorAluminio` decimal(5,2) DEFAULT 0.00,
  `nomeCobre` varchar(30) DEFAULT 'não especificado',
  `tipoCobre` varchar(30) DEFAULT 'cobre',
  `pesoCobre` decimal(5,3) DEFAULT NULL,
  `valorCobre` decimal(5,2) DEFAULT 0.00,
  `nomePlastico` varchar(30) DEFAULT 'não especificado',
  `tipoPlastico` varchar(30) DEFAULT 'plastico',
  `pesoPlastico` decimal(5,3) DEFAULT NULL,
  `valorPlastico` decimal(5,2) DEFAULT 0.00,
  PRIMARY KEY (`idM`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `materiais_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais`
--

LOCK TABLES `materiais` WRITE;
/*!40000 ALTER TABLE `materiais` DISABLE KEYS */;
INSERT INTO `materiais` VALUES (1,1,NULL,'aluminio',0.800,NULL,'Tampa de bueiro','cobre',10.000,NULL,'Garrafa Pet','plastico',1.000,NULL),(2,21,NULL,NULL,NULL,NULL,NULL,'cobre',10.000,32.00,NULL,'plastico',1.000,3.00);
/*!40000 ALTER TABLE `materiais` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Lucas','catador','não cadastrado','não cadastrado','lucas@gmail.com','81dc9bdb52d04dc20036dbd8313ed055','breve descrição do usuário','2021-02-09'),(2,'Thalis','catador','não cadastrado','não cadastrado','thalis@gmail.com','25d7b789ea6e14c18076f1a6971fa6e2','breve descrição do usuário','2021-02-09'),(16,'Rayssa','Doador','não cadastrado','não cadastrado','rayssa@gmail.com','81dc9bdb52d04dc20036dbd8313ed055','breve descrição do usuário','2021-02-16'),(21,'Gustavo','estabelecimento','não cadastrado','não cadastrado','gustavo@gmail.com','81dc9bdb52d04dc20036dbd8313ed055','breve descrição do usuário','2021-02-16');
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

-- Dump completed on 2021-02-16 15:40:38
