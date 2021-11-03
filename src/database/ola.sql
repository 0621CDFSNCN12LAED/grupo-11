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
  `professional_name` varchar(255) NOT NULL,
  `cuil_cuit` bigint(20) NOT NULL,
  `dni` bigint(20) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `professional_image` varchar(255) NOT NULL,
  `professional_location` varchar(255) NOT NULL,
  `professionl_description` text NOT NULL,
  `pay_method` varchar(255) NOT NULL,
  `celphone` bigint(20) NOT NULL,
  `id_membership` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuil_cuit` (`cuil_cuit`),
  UNIQUE KEY `dni` (`dni`),
  KEY `id_membership` (`id_membership`),
  CONSTRAINT `professionals_ibfk_1` FOREIGN KEY (`id_membership`) REFERENCES `memberships` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

INSERT INTO memberships(id,name) VALUES(1,'Normal'),(2,'Medium'),(3,'Premium');

INSERT INTO professionals(id,professional_name,cuil_cuit,dni,profession,professional_image,professional_location,professionl_description,pay_method,celphone,id_membership) VALUES(1,'Roberto Carlos',202356501188,35650118,'Carpintero','Imagen','Santa Fe',X'536f7920756e206361706f20636f6e206c61206d6164657261','Efectivo',1169491656,1);

INSERT INTO users(id,user_name,birthday,email,user_image,user_password) VALUES(1,'Pepito Morales','0000-00-00','pepito@gmail.com','imagen','12345pepito'),(2,'Pepito Morales','0000-00-00','pepito2@gmail.com','imagen','12345pepito'),(3,'Pepito Morales','1990-02-12','pepito3@gmail.com','imagen','12345pepito');
INSERT INTO users_professionals(id,id_user,id_professional) VALUES(1,1,1);