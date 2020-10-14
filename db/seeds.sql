INSERT INTO  users (name, email) VALUES ('Name', 'email');

INSERT INTO receivedGifts (users_id, senderName, senderAddress,  gift, occasion, date, thankYou) 
VALUES (1, 'name', 'address' , 'Car', 'push gift', 12/26/2014 ,1);

INSERT INTO sentGifts (users_id, receiverName, receiveraddress, gift, cost , occasion, date)
VALUE (1 ,'name', 'address', 'goat', 225.50, 'wedding',  03/25/2017);
select * from sentGifts;
