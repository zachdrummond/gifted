INSERT INTO  users (name, email) VALUES ('Name', 'email@email.com');

INSERT INTO gifts_db.ReceivedGifts (user_id, senderName, senderAddress,  giftReceived, occasion, dateReceived, thankYou) 
VALUES (1, 'Michael James', '122 North Dr.' , 'Golf Balls', 'Graduation', '2007-05-26' ,1), (1, 'David Mann', '44 50th St.' , 'Mario Cart', 'Birthday', '2016-04-17' ,1),
(1, 'Sarah Roberts', '33 South Dr.' , 'Socks', 'Birthday', '2012-04-17' ,0),
(1, 'Jessica Doon', '45 Welcome Dr.' , 'Chess Set', 'Christmas', '2018-12-25',0), 
(1, 'Michael James', '122 North Dr.' , 'Golf Balls', 'Graduation', '2007-05-26' ,1),
(1, 'Denise Jones', '27 Apple street.', 'Office chairs', 'Birthday', '2008-08-28',1),
(1, 'Brian Michaels', '818 Humble Rd.' , 'Dinner Plates', 'Graduation', '2013-12-16',1),
(1, 'Andrew Pascal', '7542 Diev St.' , 'Crystal Bowl', 'Graduation', '2013-12-16' ,1),
(1, 'Michael Jordan', '45fth Street.' , 'Golf Balls', 'Graduation', '2013-10-16' ,1),
(1, 'Jenny Craig', '122 North Dr.' , 'Day Planner', 'Graduation', '2013-10-26' ,1),
(1, 'Brittany Russel', '12 Sunset Blvd.' , 500, 'Graduation', '2013-12-16',1),
(1, 'Billie May', '10th Hope Street.' , 'CuisineArt Oven', 'Birthday', '2018-05-26' ,1),
(1, 'Jesse James', '255 West 9th St.' , 'Ski Boots', 'Birthday', '2018-05-26' ,1),
(1, 'Luke Brain', '2525 Angel Dr.' , 'Ski Skates', 'Birthday', '2019-05-26' ,1),
(1, 'John Stone', '70 Barcelona Crt.' , 'Ski Blades', 'Birthday', '2019-05-26' ,1);

INSERT INTO gifts_db.sentGifts (user_id, receiverName, receiveraddress, giftSent, cost , occasion, dateSent)
VALUE (1,'Harry Herbert', '1212 Peachtree St.', 'Goat', 225.50, 'Wedding', '2017-03-25'),
(1 ,'Emily James', '555 Fruit St.', 'Flowers', 30, 'Birthday', '2020-03-25'),
(1 ,'Katie Melvin', '90 Jackson St.', 'Dog', 150, 'Christmas', '2013-12-25'),
(1 ,'Tobie Tate', '34 Starlight Dr.', 'Bourbon', 42, 'Christmas', '2016-12-25'),
(1 ,'Tommy Jones', '1236 Meadow Lane.', 'Whiskey', 750.50, 'Wedding', '2017-03-25'),
(1 ,'Henry Foster', '8435 Christina Place.', 'Grill', 300.50, 'Wedding', '2017-03-25'),
(1 ,'Anthony Lockhurt', '1710 Armstrong Dr.', 'Cool box', 100.10, 'Wedding', '2017-03-25'),
(1 ,'Timothy James', '2030 East Place.', 'Yoga Mat', 20.7, 'Wedding', '2017-03-25'),
(1 ,'Michelle Galler', '2010 Commons Place.', 'KitchenAid Mixer', 350.00, 'Wedding', '2017-03-25'),
(1 ,'Susan Jenna', '2434 Tree Lane.', 'Wallet', 40.50, 'Wedding', '2017-03-25'),
(1 ,'Emily Jones', '5050 Eagle Point', 'Cowboy Boots', 99.25, 'Wedding', '2017-03-25'),
(1 ,'Cortney Collins', '5555 Chattahoochee.', 'Play Station', 400, 'Wedding', '2017-03-25'),
(1 ,'Amy Thomas', '798 Moon Rd.', 'Dog Water Bowl',10.0, 'Wedding', '2017-03-25'),
(1 ,'Christen Owens', '25 Love Street.', 'Fortnite Game', 25.50, 'Wedding', '2017-03-25'),
(1 ,'Ruth Jane', '4689 Graves Rd.', 'Starbuck Giftcard', 50.00, 'Wedding', '2017-03-25'),
(1 ,'Esther Harper', '100 Nickelback Blvd.', 'Neon Light', .25, 'Wedding', '2017-03-25');

