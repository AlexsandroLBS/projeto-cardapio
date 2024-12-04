CREATE TABLE orderitems (
                             id BIGINT NOT NULL AUTO_INCREMENT,
                             fk_order BIGINT NOT NULL,
                             name VARCHAR(100) NOT NULL,
                             description TEXT,
                             price DECIMAL(10, 2) NOT NULL,
                             img_url VARCHAR(120) DEFAULT NULL,
                             amount INT NOT NULL,
                             PRIMARY KEY (id),
                             FOREIGN KEY (fk_order) REFERENCES orders(id)
);
