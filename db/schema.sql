
drop database if exists gifts_db;
CREATE DATABASE gifts_db;

USE gifts_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO  users (name, email) VALUES ('Name', 'email');

CREATE TABLE receivedGifts (
	id int NOT NULL AUTO_INCREMENT,
	users_id INT (255) NOT NULL,
	senderName VARCHAR(255) NOT NULL,
	senderAddress VARCHAR(255) NOT NULL,
	gift VARCHAR (255)NOT NULL,
    occasion VARCHAR(255) NOT NULL,
    date DATE,
    thankYou boolean default false ,
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);
INSERT INTO receivedGifts (users_id, senderName, senderAddress,  gift, occasion, date, thankYou) 
VALUES (1, 'name', 'address' , 'Car', 'push gift', 12/26/2014 ,1);


CREATE TABLE sentGifts
(
	id int NOT NULL AUTO_INCREMENT,
	users_id INT (255) NOT NULL,
	receiverName VARCHAR(255) NOT NULL,
	receiverAddress VARCHAR (255)NOT NULL,
	gift VARCHAR (255) NOT NULL,
    cost decimal (10,2) NOT NULL,
    occasion VARCHAR (255) NOT NULL,
    date DATE, 
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);


