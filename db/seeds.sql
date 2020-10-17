INSERT INTO  users (name, email) VALUES ('Name', 'email@email.com');

INSERT INTO gifts_db.ReceivedGifts (user_id, senderName, senderAddress,  giftReceived, occasion, dateReceived, thankYou) 
VALUES (1, 'Michael James', '122 North Dr.' , 'Golf Balls', 'Graduation', '2007-05-26' ,1), (1, 'David Mann', '44 50th St.' , 'Mario Cart', 'Birthday', '2016-04-17' ,1);

INSERT INTO gifts_db.sentGifts (user_id, receiverName, receiveraddress, giftSent, cost , occasion, dateSent)
VALUE (1 ,'Harry Herbert', '1212 Peachtree St.', 'Goat', 225.50, 'Wedding', '2017-03-25'), (1 ,'Emily James', '555 Fruit St.', 'Flowers', 30, 'Birthday', '2020-03-25');
