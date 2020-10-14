
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

CREATE TABLE receivedGifts (
	id int NOT NULL AUTO_INCREMENT,
	user_id INT (255) NOT NULL,
	senderName VARCHAR(255) NOT NULL,
	senderAddress VARCHAR(255) NOT NULL,
	gift VARCHAR (255)NOT NULL,
    occasion VARCHAR(255) NOT NULL,
    date DATE,
    thankYou boolean default false ,
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);


CREATE TABLE sentGifts
(
	id int NOT NULL AUTO_INCREMENT,
	user_id INT (255) NOT NULL,
	receiverName VARCHAR(255) NOT NULL,
	receiverAddress VARCHAR (255)NOT NULL,
	gift VARCHAR (255) NOT NULL,
    cost decimal (10,2) NOT NULL,
    occasion VARCHAR (255) NOT NULL,
    date DATE, 
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);


