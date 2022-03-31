DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);
        
INSERT INTO Trybesmith.Users (username, classe, level, password)
VALUES ('koraia', 'monk', 3, 'asoidasdjasdj'),
		('zeze', 'guerreira', 54, 'asoidasdjsadj'),
        ('falithas', 'gladiadora', 248, 'sadoidasdjj');

INSERT INTO Trybesmith.Orders (userId) 
	VALUES (1), (3);

INSERT INTO Trybesmith.Products (name, amount, orderId) 
	VALUES 
		    ('Unbound changeling', '100 gold', 2),
        ('Tower Shield', '200 diamond', 1),
        ('Bastard Sword', '500 silver', 1);

INSERT INTO Trybesmith.Products (name, amount) 
	VALUES 
        ('Plate mail', '500 silver'),
        ('Ruby ring', '5 ruby'),
        ('Teresa velvet', '500 silver');
       