INSERT INTO  users (name, email) VALUES ('Name', 'email');

INSERT INTO receivedGifts (user_id, senderName, senderAddress,  giftReceived, occasion, dateReceived, thankYou) 
VALUES (1, 'name', 'address' , 'Car', 'push gift', 12/26/2014 ,1);

INSERT INTO sentGifts (user_id, receiverName, receiveraddress, giftSent, cost , occasion, dateSent)
VALUE (1 ,'name', 'address', 'goat', 225.50, 'wedding',  03/25/2017);
select * from sentGifts;
