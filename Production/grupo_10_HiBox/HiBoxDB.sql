-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: hiboxdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

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
-- Table structure for table `categorys`
--

DROP TABLE IF EXISTS `categorys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorys`
--

LOCK TABLES `categorys` WRITE;
/*!40000 ALTER TABLE `categorys` DISABLE KEYS */;
INSERT INTO `categorys` VALUES (1,'Aventura'),(2,'Entretenimiento'),(3,'Gastronomía');
/*!40000 ALTER TABLE `categorys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `price` double NOT NULL,
  `priceBefore` double DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `productImage` varchar(255) NOT NULL,
  `stateId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `subCategoryId` int(11) NOT NULL,
  `INSERT INTO hiboxdb.products (name` varchar(64) DEFAULT NULL,
  `subCategoryId) VALUES` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_subCat` (`subCategoryId`),
  KEY `FK_cat` (`categoryId`),
  KEY `FK_state` (`stateId`),
  CONSTRAINT `FK_cat` FOREIGN KEY (`categoryId`) REFERENCES `categorys` (`id`),
  CONSTRAINT `FK_state` FOREIGN KEY (`stateId`) REFERENCES `states` (`id`),
  CONSTRAINT `FK_subCat` FOREIGN KEY (`subCategoryId`) REFERENCES `subcategorys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Salto en Paracaídas',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154468865.jpg',1,1,1,NULL,NULL),(2,'Clases de Surf',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154531357.jpg',1,1,1,NULL,NULL),(3,'Clases de Escalada',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154575550.jpg',2,1,1,NULL,NULL),(4,'Excursión a Machu Pichu',30000,18000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154619516.jpg',1,1,2,NULL,NULL),(5,'Paseo por el Perito Moreno',30000,20000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154665597.jpg',3,1,2,NULL,NULL),(6,'Trecking Valle de San Juan',30000,20000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154728740.jpg',2,1,2,NULL,NULL),(7,'Rafting en Mendoza',30000,20000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154770293.jpg',1,1,3,NULL,NULL),(8,'Alto Parque',30000,20000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154811323.jpg',3,1,3,NULL,NULL),(9,'Parque de Diversiones',30000,20000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154891269.jpg',2,1,3,NULL,NULL),(10,'Visita al Museo Nacional',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154959629.jpg',1,2,1,NULL,NULL),(11,'Clase de Yoga',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652154993539.jpg',3,2,1,NULL,NULL),(12,'Meet & Greet Lio Messi',50000,30000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155052124.jpg',2,2,1,NULL,NULL),(13,'Palco Teatro Colón',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155095355.jpg',1,2,2,NULL,NULL),(14,'Show en Vivo',3000,2000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155133531.jpg',3,2,2,NULL,NULL),(15,'Entradas de Cine',1500,960,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155169875.jpg',2,2,2,NULL,NULL),(16,'Piñon Fijo, en familia',7000,3500,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155205356.jpg',1,2,3,NULL,NULL),(17,'Entradas Temaiken',8500,6500,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155268748.jpg',3,2,3,NULL,NULL),(18,'Parque de los Niños',5500,2380,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155312523.jpg',2,2,3,NULL,NULL),(19,'Cena 7 pasos',5000,3000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155374611.jpg',1,3,1,NULL,NULL),(20,'Curso Sommeliere Wisky',4500,1700,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155410309.jpg',3,3,1,NULL,NULL),(21,'Curso de Cocina',4500,3900,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155451004.jpg',2,3,1,NULL,NULL),(22,'Cata de Vinos',4500,3600,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155507324.jpg',1,3,2,NULL,NULL),(23,'Roof Bar MALAMIA',8000,3500,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155559197.jpg',3,3,2,NULL,NULL),(24,'Brunch Palacio Duho',9000,5600,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155590564.jpg',2,3,2,NULL,NULL),(25,'Restaurant Tematico',10500,8500,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155630870.jpg',1,3,3,NULL,NULL),(26,'Kansas Palermo',12500,9500,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155678403.jpg',3,3,3,NULL,NULL),(27,'Pedro Pica & Hierve',50000,15000,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos esse id odio nobis ipsum molestias fugit! Nemo dolore totam ratione nostrum aliquid veniam, illum, qui eligendi iure at et in!','/images/products/img-1652155716548.jpg',2,3,3,NULL,NULL),(28,'Producto Prueba',1111111111,1.1111111111111112e18,'Detalle de producto nuevo','/images/products/img-1652206614336.jpg',3,2,2,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Nuevo'),(2,'Destacado'),(3,'Oferta');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategorys`
--

DROP TABLE IF EXISTS `subcategorys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategorys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subCategory` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategorys`
--

LOCK TABLES `subcategorys` WRITE;
/*!40000 ALTER TABLE `subcategorys` DISABLE KEYS */;
INSERT INTO `subcategorys` VALUES (1,'Individual'),(2,'Acompañado'),(3,'Familiar');
/*!40000 ALTER TABLE `subcategorys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokenusers`
--

DROP TABLE IF EXISTS `tokenusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokenusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokenusers`
--

LOCK TABLES `tokenusers` WRITE;
/*!40000 ALTER TABLE `tokenusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokenusers` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `productscart`
--

DROP TABLE IF EXISTS `productscart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productscart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productscart`
--

LOCK TABLES `productscart` WRITE;
/*!40000 ALTER TABLE `productscart` DISABLE KEYS */;
/*!40000 ALTER TABLE `productscart` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `users`
--


DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(15) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `userImage` varchar(255) NOT NULL,
  `userPrivilege` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nico','novikov','niconovikov@gmail.com','$2a$10$ts9OPjjUFB3HKtxRAgydfeAP.aK2B9.MaAUQq730nTHihC4Kt8RL2','/images/users/default-user.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hiboxdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 21:22:26
