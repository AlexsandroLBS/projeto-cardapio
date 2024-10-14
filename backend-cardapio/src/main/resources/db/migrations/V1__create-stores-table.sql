CREATE TABLE stores (
	id BIGINT NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	description VARCHAR(60),
	address VARCHAR(90) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	img_url VARCHAR(120) DEFAULT NULL,
	password VARCHAR (255) NOT NULL,
	created_at DATETIME DEFAULT UTC_TIMESTAMP(),
	PRIMARY KEY(id),
	UNIQUE INDEX uq_phone (phone_number)
);
