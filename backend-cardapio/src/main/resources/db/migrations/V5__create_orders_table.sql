CREATE TABLE orders (
                        id BIGINT NOT NULL AUTO_INCREMENT,
                        fk_client BIGINT NOT NULL,
                        fk_store BIGINT NOT NULL,
                        payment_confirmed BOOLEAN DEFAULT FALSE,
                        delivery_confirmed BOOLEAN DEFAULT FALSE,
                        order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (id),
                        FOREIGN KEY (fk_client) REFERENCES clients(id),
                        FOREIGN KEY (fk_store) REFERENCES stores(id)
);
