### Schema

CREATE DATABASE gifts_db;

USE gifts_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    users_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE recievedGifts
(
	id int NOT NULL AUTO_INCREMENT,
	users_id INT (255) NOT NULL,
	senderName VARCHAR(255) NOT NULL,
	senderAddress VARCHAR NOT NULL,
	giftReceived VARCHAR NOT NULL,
    occassion VARCHAR NOT NULL,
    dateRecieved DATE,
    thankYouCard boolean,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE sendGifts
(
	id int NOT NULL AUTO_INCREMENT,
	users_id INT (255) NOT NULL,
	receiverName VARCHAR(255) NOT NULL,
	receiverAddress VARCHAR NOT NULL,
	giftsent VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    occasions VARCHAR,
    datesSent DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (sender_id) REFERENCES recievedGifts(id)
);

