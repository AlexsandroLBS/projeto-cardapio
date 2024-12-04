package com.unifor.cardapio.models.order;

import java.util.Date;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.unifor.cardapio.models.client.Client;
import com.unifor.cardapio.models.orderItem.OrderItem;
import com.unifor.cardapio.models.store.Store;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "orders")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

/**
 * Models orders from MySQL db
 */
public class Order {
	@Id
	@GeneratedValue
	private Integer id;
	private Date orderTime;
	private boolean confirmedPay;
	private boolean confirmedDelivery;

	@ManyToOne
	@JoinColumn(name = "fk_client")
	private Client client;

	@ManyToOne
	@JoinColumn(name = "fk_store")
	private Store store;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderItem> items = new ArrayList<>();

}
