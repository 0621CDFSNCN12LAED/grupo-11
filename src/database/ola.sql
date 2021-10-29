/* Acá creamos una señora tabla de usurios, atr perro*/

CREATE TABLE `users`(
    id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_image VARCHAR(100) DEFAULT '',
    user_password VARCHAR(100) NOT NULL
);

/* Tabla de profesionales pa */
CREATE TABLE `professionals`(
    id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    professional_name VARCHAR(100) NOT NULL,
    cuil_cuit BIGINT UNIQUE NOT NULL,
    dni BIGINT UNIQUE NOT NULL,
    profession VARCHAR(100) NOT NULL,
    professional_image VARCHAR(100) DEFAULT '',
    professional_location VARCHAR(100) NOT NULL,
    professionl_description TEXT NOT NULL,
    pay_method VARCHAR(100) NOT NULL,
    celphone BIGINT NOT NULL
);
