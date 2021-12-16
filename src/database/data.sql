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

INSERT INTO memberships(id,name) VALUES(1,'Normal'),(2,'Medium'),(3,'Premium');

INSERT INTO professionals(id,professionalName,cuilCuit,dni,profession,professionalImage,professionalLocation,professionlDescription,payMethod,celphone,id_membership) VALUES(1,'Skippie Plackstone',42274140499,117457026,'Accounting Assistant III','imagen-profesional-01','Couva',X'766976616d757320746f72746f722064756973206d61747469732065676573746173206d657475732061656e65616e206665726d656e74756d20646f6e6563207574206d61757269732065676574206d617373612074656d706f7220636f6e76616c6c6973206e756c6c61206e65717565206c696265726f20636f6e76616c6c6973206567657420656c656966656e64206c756374757320756c74726963696573206575206e6962682071756973717565206964206a7573746f2073697420616d65742073617069656e206469676e697373696d20766573746962756c756d20766573746962756c756d20616e746520697073756d207072696d697320696e206661756369627573206f726369206c756374757320657420756c74726963657320706f737565726520637562696c6961206375726165206e756c6c61206461706962757320646f6c6f722076656c2065737420646f6e6563206f64696f206a7573746f20736f6c6c696369747564696e207574207375736369706974206120666575676961742065742065726f7320766573746962756c756d20616320657374206c6163696e6961206e6973692076656e656e617469732074726973746971756520667573636520636f6e677565206469616d206964206f726e61726520696d706572646965742073617069656e2075726e61207072657469756d206e69736c20757420766f6c75747061742073617069656e20617263752073656420617567756520616c697175616d206572617420766f6c757470617420696e20636f6e67756520657469616d206a7573746f20657469616d207072657469756d20696163756c6973206a7573746f20696e206861632068616269746173736520706c617465612064696374756d737420657469616d206661756369627573206375727375732075726e612075742074656c6c7573206e756c6c612075742065726174206964206d61757269732076756c70757461746520656c656d656e74756d206e756c6c616d20766172697573206e756c6c6120666163696c6973692063726173206e6f6e2076656c6974206e6563206e6973692076756c707574617465206e6f6e756d6d79206d616563656e61732074696e636964756e74206c616375732061742076656c697420766976616d75732076656c206e756c6c6120656765742065726f7320656c656d656e74756d2070656c6c656e746573717565207175697371756520706f72746120766f6c75747061742065726174207175697371756520657261742065726f732076697665727261206567657420636f6e67756520656765742073656d7065722072757472756d206e756c6c61206e756e632070757275732070686173656c6c757320696e2066656c697320646f6e65632073656d7065722073617069656e2061206c696265726f206e616d206475692070726f696e206c656f206f64696f20706f72747469746f7220696420636f6e73657175617420696e20636f6e736571756174207574206e756c6c612073656420616363756d73616e2066656c697320757420617420646f6c6f722071756973206f64696f20636f6e7365717561742076617269757320696e7465676572206163206c656f2070656c6c656e74657371756520756c747269636573206d6174746973206f64696f20646f6e6563207669746165206e697369206e616d20756c747269636573206c696265726f206e6f6e','jcb',8092179002,3),(2,'Karyn Pinchbeck',38922129786,885946150,'Developer II','imagen-profesional-02','Akebielidou',X'61646970697363696e67206d6f6c65737469652068656e6472657269742061742076756c707574617465207669746165206e69736c2061656e65616e206c65637475732070656c6c656e7465737175652065676574206e756e6320646f6e65632071756973206f7263692065676574206f726369207665686963756c6120636f6e64696d656e74756d2063757261626974757220696e206c696265726f207574206d6173736120766f6c757470617420636f6e76616c6c6973206d6f726269206f64696f206f64696f20656c656d656e74756d20657520696e74657264756d2065752074696e636964756e7420696e206c656f206d616563656e61732070756c76696e6172206c6f626f72746973206573742070686173656c6c75732073697420616d65742065726174206e756c6c612074656d70757320766976616d757320696e2066656c69732065752073617069656e2063757273757320766573746962756c756d2070726f696e206575206d69206e756c6c6120616320656e696d20696e2074656d706f7220747572706973206e656320657569736d6f64207363656c65726973717565207175616d207475727069732061646970697363696e67206c6f72656d207669746165206d6174746973206e696268206c6967756c61206e65632073656d206475697320616c697175616d20636f6e76616c6c6973206e756e632070726f696e206174207475727069732061207065646520706f7375657265206e6f6e756d6d7920696e7465676572206e6f6e2076656c697420646f6e6563206469616d206e6571756520766573746962756c756d20656765742076756c70757461746520757420756c7472696365732076656c20617567756520766573746962756c756d20616e746520697073756d207072696d697320696e206661756369627573206f726369206c756374757320657420756c74726963657320706f737565726520637562696c696120637572616520646f6e6563207068617265747261206d61676e6120766573746962756c756d20616c697175657420756c747269636573206572617420746f72746f7220736f6c6c696369747564696e206d692073697420616d6574206c6f626f727469732073617069656e2073617069656e206e6f6e206d6920696e7465676572206163206e65717565206475697320626962656e64756d206d6f726269206e6f6e207175616d206e656320647569206c75637475732072757472756d206e756c6c612074656c6c757320696e207361676974746973206475692076656c206e69736c2064756973206163206e696268206675736365206c6163757320707572757320616c69717565742061742066657567696174206e6f6e207072657469756d2071756973206c65637475732073757370656e646973736520706f74656e746920696e20656c656966656e64207175616d2061206f64696f20696e206861632068616269746173736520706c617465612064696374756d7374206d616563656e6173207574','bankcard',6546255724,3),(3,'Claudell Hallagan',41818957865,842209483,'GIS Technical Architect','imagen-profesional-03','Emar',X'6c6163757320707572757320616c69717565742061742066657567696174206e6f6e207072657469756d2071756973206c65637475732073757370656e646973736520706f74656e746920696e20656c656966656e64207175616d2061206f64696f20696e206861632068616269746173736520706c617465612064696374756d7374206d616563656e6173207574206d617373612071756973206175677565206c75637475732074696e636964756e74206e756c6c61206d6f6c6c6973206d6f6c6573746965206c6f72656d20717569737175652075742065726174206375726162697475722067726176696461206e697369206174206e69626820696e206861632068616269746173736520706c617465612064696374756d737420616c697175616d206175677565207175616d20736f6c6c696369747564696e20766974616520636f6e73656374657475657220656765742072757472756d206174206c6f72656d20696e74656765722074696e636964756e7420616e74652076656c20697073756d207072616573656e7420626c616e646974206c6163696e6961206572617420766573746962756c756d20736564206d61676e61206174206e756e6320636f6d6d6f646f20706c616365726174207072616573656e7420626c616e646974206e616d206e756c6c6120696e74656765722070656465206a7573746f206c6163696e696120656765742074696e636964756e7420656765742074656d7075732076656c2070656465206d6f72626920706f72747469746f72206c6f72656d206964206c6967756c612073757370656e6469737365206f726e61726520636f6e736571756174206c656374757320696e2065737420726973757320617563746f72207365642074726973746971756520696e2074656d707573','jcb',1877694693,3),(4,'Loy Davidoff',89846383125,795887070,'Senior Cost Accountant','imagen-profesional-04','Eláteia',X'766573746962756c756d20656765742076756c70757461746520757420756c7472696365732076656c20617567756520766573746962756c756d20616e746520697073756d207072696d697320696e206661756369627573206f726369206c756374757320657420756c74726963657320706f737565726520637562696c696120637572616520646f6e6563207068617265747261206d61676e6120766573746962756c756d20616c697175657420756c747269636573206572617420746f72746f7220736f6c6c696369747564696e206d692073697420616d6574206c6f626f727469732073617069656e2073617069656e206e6f6e206d6920696e7465676572206163206e65717565206475697320626962656e64756d206d6f726269206e6f6e207175616d206e656320647569206c75637475732072757472756d206e756c6c612074656c6c757320696e207361676974746973206475692076656c206e69736c2064756973206163206e696268206675736365206c6163757320707572757320616c69717565742061742066657567696174206e6f6e207072657469756d2071756973206c65637475732073757370656e646973736520706f74656e746920696e20656c656966656e64207175616d2061206f64696f20696e206861632068616269746173736520706c617465612064696374756d7374206d616563656e6173207574206d617373612071756973206175677565206c75637475732074696e636964756e74206e756c6c61206d6f6c6c6973206d6f6c6573746965206c6f72656d20717569737175652075742065726174206375726162697475722067726176696461206e697369206174206e69626820696e206861632068616269746173736520706c617465612064696374756d737420616c697175616d206175677565207175616d20736f6c6c696369747564696e','visa-electron',5514095859,1),(5,'Kaitlin O\'Hartnett',51883691081,127851605,'Sales Representative','imagen-profesional-05','Palestina de los Altos',X'696e74657264756d2076656e656e617469732074757270697320656e696d20626c616e646974206d6920696e20706f72747469746f722070656465206a7573746f206575206d6173736120646f6e6563206461706962757320647569732061742076656c69742065752065737420636f6e67756520656c656d656e74756d20696e206861632068616269746173736520706c617465612064696374756d7374206d6f72626920766573746962756c756d2076656c6974206964207072657469756d20696163756c6973206469616d2065726174206665726d656e74756d206a7573746f206e656320636f6e64696d656e74756d206e657175652073617069656e20706c61636572617420616e7465206e756c6c61206a7573746f20616c697175616d207175697320747572706973206567657420656c697420736f64616c6573207363656c65726973717565206d61757269732073697420616d65742065726f732073757370656e646973736520616363756d73616e20746f72746f722071756973207475727069732073656420616e746520766976616d757320746f72746f72','americanexpress',6131690790,1),(6,'Violette O\'Clery',13465292552,1064603249,'Software Engineer IV','imagen-profesional-06','Cedry Wielkie',X'696163756c6973206469616d2065726174206665726d656e74756d206a7573746f206e656320636f6e64696d656e74756d206e657175652073617069656e20706c61636572617420616e7465206e756c6c61206a7573746f20616c697175616d207175697320747572706973206567657420656c697420736f64616c6573207363656c65726973717565206d61757269732073697420616d65742065726f732073757370656e646973736520616363756d73616e20746f72746f722071756973207475727069732073656420616e746520766976616d757320746f72746f722064756973206d61747469732065676573746173206d657475732061656e65616e206665726d656e74756d20646f6e6563207574206d61757269732065676574206d617373612074656d706f7220636f6e76616c6c6973206e756c6c61206e65717565206c696265726f20636f6e76616c6c6973206567657420656c656966656e64206c756374757320756c74726963696573206575206e6962682071756973717565206964206a7573746f2073697420616d65742073617069656e206469676e697373696d20766573746962756c756d20766573746962756c756d20616e746520697073756d207072696d697320696e206661756369627573206f726369206c756374757320657420756c74726963657320706f737565726520637562696c6961206375726165206e756c6c61206461706962757320646f6c6f722076656c2065737420646f6e6563206f64696f206a7573746f20736f6c6c696369747564696e20757420737573636970697420612066657567696174','jcb',2501350091,1),(7,'Nesta Thorpe',61909128222,916729233,'Health Coach II','imagen-profesional-07','Litian',X'736564206e69736c206e756e632072686f6e637573206475692076656c2073656d20736564207361676974746973206e616d20636f6e6775652072697375732073656d70657220706f72746120766f6c7574706174207175616d2070656465206c6f626f72746973206c6967756c612073697420616d657420656c656966656e642070656465206c696265726f2071756973206f726369206e756c6c616d206d6f6c6573746965206e69626820696e206c65637475732070656c6c656e746573717565206174206e756c6c612073757370656e646973736520706f74656e7469206372617320696e207075727573206575206d61676e612076756c707574617465206c7563747573','americanexpress',1042687763,1),(8,'Catrina Bratton',68873799722,655897566,'Assistant Manager','imagen-profesional-08','Bolo',X'6a7573746f206575206d6173736120646f6e6563206461706962757320647569732061742076656c69742065752065737420636f6e67756520656c656d656e74756d20696e206861632068616269746173736520706c617465612064696374756d7374206d6f72626920766573746962756c756d2076656c6974206964207072657469756d20696163756c6973206469616d2065726174206665726d656e74756d206a7573746f206e656320636f6e64696d656e74756d206e657175652073617069656e20706c61636572617420616e7465206e756c6c61206a7573746f20616c697175616d207175697320747572706973206567657420656c697420736f64616c6573207363656c65726973717565206d61757269732073697420616d65742065726f732073757370656e646973736520616363756d73616e20746f72746f722071756973207475727069732073656420616e746520766976616d757320746f72746f722064756973206d61747469732065676573746173206d657475732061656e65616e206665726d656e74756d20646f6e6563207574206d61757269732065676574206d617373612074656d706f7220636f6e76616c6c6973206e756c6c61206e65717565206c696265726f20636f6e76616c6c6973206567657420656c656966656e64206c756374757320756c74726963696573206575206e6962682071756973717565206964206a7573746f2073697420616d65742073617069656e206469676e697373696d20766573746962756c756d20766573746962756c756d20616e746520697073756d207072696d697320696e206661756369627573206f726369206c756374757320657420756c74726963657320706f737565726520637562696c6961206375726165206e756c6c61206461706962757320646f6c6f722076656c2065737420646f6e6563206f64696f206a7573746f20736f6c6c696369747564696e207574207375736369706974206120666575676961742065742065726f7320766573746962756c756d20616320657374206c6163696e6961206e6973692076656e656e617469732074726973746971756520667573636520636f6e677565206469616d206964206f726e61726520696d706572646965742073617069656e2075726e61207072657469756d206e69736c20757420766f6c75747061742073617069656e20617263752073656420617567756520616c697175616d206572617420766f6c757470617420696e20636f6e67756520657469616d206a7573746f20657469616d207072657469756d20696163756c6973206a7573746f20696e206861632068616269746173736520706c617465612064696374756d737420657469616d206661756369627573206375727375732075726e612075742074656c6c7573206e756c6c612075742065726174206964206d6175726973','diners-club-us-ca',3492514737,2),(9,'Chase Dann',18512712211,710983238,'Office Assistant IV','imagen-profesional-09','Digne-les-Bains',X'7361676974746973206475692076656c206e69736c2064756973206163206e696268206675736365206c6163757320707572757320616c69717565742061742066657567696174206e6f6e207072657469756d2071756973206c65637475732073757370656e646973736520706f74656e746920696e20656c656966656e64207175616d2061206f64696f20696e206861632068616269746173736520706c617465612064696374756d7374206d616563656e6173207574206d617373612071756973206175677565206c75637475732074696e636964756e74206e756c6c61206d6f6c6c6973206d6f6c6573746965206c6f72656d20717569737175652075742065726174206375726162697475722067726176696461206e697369206174206e69626820696e206861632068616269746173736520706c617465612064696374756d737420616c697175616d206175677565207175616d20736f6c6c696369747564696e20766974616520636f6e73656374657475657220656765742072757472756d206174206c6f72656d20696e74656765722074696e636964756e7420616e74652076656c20697073756d207072616573656e7420626c616e646974206c6163696e6961206572617420766573746962756c756d20736564206d61676e61206174206e756e6320636f6d6d6f646f20706c616365726174207072616573656e7420626c616e646974206e616d206e756c6c6120696e74656765722070656465206a7573746f206c6163696e696120656765742074696e636964756e7420656765742074656d7075732076656c2070656465206d6f72626920706f72747469746f72206c6f72656d206964206c6967756c612073757370656e6469737365206f726e61726520636f6e736571756174206c656374757320696e2065737420726973757320617563746f72207365642074726973746971756520696e2074656d7075732073697420616d65742073656d20667573636520636f6e736571756174206e756c6c61206e69736c206e756e63206e69736c206475697320626962656e64756d2066656c69732073656420696e74657264756d2076656e656e617469732074757270697320656e696d20626c616e646974206d6920696e20706f72747469746f722070656465206a7573746f206575206d6173736120646f6e6563206461706962757320647569732061742076656c69742065752065737420636f6e67756520656c656d656e74756d20696e206861632068616269746173736520706c617465612064696374756d7374206d6f72626920766573746962756c756d2076656c6974206964207072657469756d20696163756c6973206469616d2065726174206665726d656e74756d206a7573746f206e656320636f6e64696d656e74756d206e657175652073617069656e20706c61636572617420616e7465206e756c6c61206a7573746f20616c697175616d207175697320747572706973206567657420656c697420736f64616c6573','visa-electron',8027273140,2),(10,'Saunderson Yuille',67766784163,195073919,'Internal Auditor','imagen-profesional-10','Thoeng',X'6675736365206c6163757320707572757320616c69717565742061742066657567696174206e6f6e207072657469756d2071756973206c65637475732073757370656e646973736520706f74656e746920696e20656c656966656e64207175616d2061206f64696f20696e206861632068616269746173736520706c617465612064696374756d7374206d616563656e6173207574206d617373612071756973206175677565206c75637475732074696e636964756e74206e756c6c61206d6f6c6c6973206d6f6c6573746965206c6f72656d20717569737175652075742065726174206375726162697475722067726176696461206e697369206174206e69626820696e206861632068616269746173736520706c617465612064696374756d737420616c697175616d206175677565207175616d20736f6c6c696369747564696e20766974616520636f6e73656374657475657220656765742072757472756d206174206c6f72656d20696e74656765722074696e636964756e7420616e74652076656c20697073756d207072616573656e7420626c616e646974206c6163696e6961206572617420766573746962756c756d20736564206d61676e61206174206e756e6320636f6d6d6f646f20706c616365726174207072616573656e7420626c616e646974206e616d206e756c6c6120696e74656765722070656465206a7573746f206c6163696e696120656765742074696e636964756e7420656765742074656d7075732076656c2070656465206d6f72626920706f72747469746f72206c6f72656d206964206c6967756c612073757370656e6469737365206f726e61726520636f6e736571756174206c656374757320696e2065737420726973757320617563746f72207365642074726973746971756520696e2074656d7075732073697420616d65742073656d20667573636520636f6e736571756174206e756c6c61206e69736c206e756e63206e69736c206475697320626962656e64756d2066656c69732073656420696e74657264756d2076656e656e617469732074757270697320656e696d20626c616e646974206d6920696e20706f72747469746f722070656465206a7573746f206575206d6173736120646f6e6563206461706962757320647569732061742076656c69742065752065737420636f6e67756520656c656d656e74756d20696e206861632068616269746173736520706c617465612064696374756d7374206d6f72626920766573746962756c756d2076656c6974206964207072657469756d20696163756c6973206469616d2065726174206665726d656e74756d206a7573746f206e656320636f6e64696d656e74756d206e657175652073617069656e20706c61636572617420616e7465206e756c6c61206a7573746f20616c697175616d207175697320747572706973206567657420656c697420736f64616c6573207363656c65726973717565206d61757269732073697420616d65742065726f732073757370656e646973736520616363756d73616e20746f72746f722071756973207475727069732073656420616e746520766976616d757320746f72746f722064756973206d61747469732065676573746173206d657475732061656e65616e206665726d656e74756d20646f6e6563207574206d61757269732065676574206d617373612074656d706f7220636f6e76616c6c6973206e756c6c61206e65717565206c696265726f20636f6e76616c6c6973206567657420656c656966656e64','diners-club-carte-blanche',3066242153,1);

INSERT INTO users(id,userName,birthday,email,userImage,userPassword) VALUES(1,'Paulie Kiloh','2004-05-16','pkiloh0@gov.uk','imagen-usuario-01','EBNXRgX2uBU8'),(2,'Hermia Hallagan','2011-05-14','hhallagan1@reverbnation.com','imagen-usuario-02','rwRuxM9T4'),(3,'Sigvard Ghiotto','2015-01-27','sghiotto2@123-reg.co.uk','imagen-usuario-03','evjI9DY1n'),(4,'Jessee Finn','2012-03-02','jfinn3@slashdot.org','imagen-usuario-04','N0LXAA'),(5,'Midge Mingauld','2013-03-27','mmingauld4@businessinsider.com','imagen-usuario-05','zh11q9lxKeQ'),(6,'Padraig Leversuch','2008-05-26','pleversuch5@freewebs.com','imagen-usuario-06','fo0wqDs'),(7,'Caro Knappen','2005-02-02','cknappen6@merriam-webster.com','imagen-usuario-07','YuWI6RTSLM'),(8,'Culley Bond','2012-06-17','cbond7@wiley.com','imagen-usuario-08','Rnamvg7sQNnt'),(9,'Casie Barnewelle','2017-08-26','cbarnewelle8@flickr.com','imagen-usuario-09','5owZigOA7'),(10,'Gay Codlin','2017-06-12','gcodlin9@dmoz.org','imagen-usuario-10','m5G7rpC');
INSERT INTO users_professionals(id,id_user,id_professional) VALUES(1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10);