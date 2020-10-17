INSERT INTO  users (name, email) VALUES ('Name', 'email@email.com');

INSERT INTO gifts_db.ReceivedGifts (user_id, senderName, senderAddress,  giftReceived, occasion, dateReceived, thankYou) 
VALUES (1, 'Michael James', '122 North Dr.' , 'Golf Balls', 'Graduation', '2007-05-26' ,1), (1, 'David Mann', '44 50th St.' , 'Mario Cart', 'Birthday', '2016-04-17' ,1),(1, 'Sarah Roberts', '33 South Dr.' , 'Socks', 'Birthday', '2012-04-17' ,0), (1, 'Jessica Doon', '45 Welcome Dr.' , 'Chess Set', 'Christmas', '2018-12-25' ,0);

INSERT INTO gifts_db.sentGifts (user_id, receiverName, receiveraddress, giftSent, cost , occasion, dateSent)
VALUE (1 ,'Harry Herbert', '1212 Peachtree St.', 'Goat', 225.50, 'Wedding', '2017-03-25'), (1 ,'Emily James', '555 Fruit St.', 'Flowers', 30, 'Birthday', '2020-03-25'), (1 ,'Katie Melvin', '90 Jackson St.', 'Dog', 150, 'Christmas', '2013-12-25'), (1 ,'Tobie Tate', '34 Starlight Dr.', 'Bourbon', 42, 'Christmas', '2016-12-25');
