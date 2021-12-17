/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ ola /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE ola;

DROP TABLE IF EXISTS memberships;
CREATE TABLE `memberships` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS professionals;
CREATE TABLE `professionals` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `professionalName` varchar(255) NOT NULL,
  `cuilCuit` bigint(20) NOT NULL,
  `dni` bigint(20) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `professionalImage` varchar(255) NOT NULL,
  `professionalLocation` varchar(255) NOT NULL,
  `professionalDescription` text NOT NULL,
  `payMethod` varchar(255) NOT NULL,
  `celphone` bigint(20) NOT NULL,
  `id_membership` int(10),
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuilCuit` (`cuilCuit`),
  UNIQUE KEY `dni` (`dni`),
  KEY `id_membership` (`id_membership`),
  CONSTRAINT `professionals_ibfk_1` FOREIGN KEY (`id_membership`) REFERENCES `memberships` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `userImage` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS users_professionals;
CREATE TABLE `users_professionals` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_user` int(10) NOT NULL,
  `id_professional` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_professional` (`id_professional`),
  CONSTRAINT `users_professionals_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `users_professionals_ibfk_2` FOREIGN KEY (`id_professional`) REFERENCES `professionals` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;