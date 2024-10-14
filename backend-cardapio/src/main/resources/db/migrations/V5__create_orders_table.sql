CREATE TABLE orders (
	id BIGINT NOT NULL AUTO_INCREMENT,
	client_id BIGINT NOT NULL,
	store_id BIGINT NOT NULL,
	order_items BIGINT NOT NULL,
	payment_confirmed BOOLEAN,
	delivery_confirmed BOOLEAN,
	order_time UTC_TIMESTAMP(),
	PRIMARY KEY(id),
	FOREIGN KEY (client_id) REFERENCES clients(id),
	FOREIGN KEY (store_id) REFERENCES stores(id),
	FOREIGN KEY (order_items_id) REFERENCES orderitem(id)
);

