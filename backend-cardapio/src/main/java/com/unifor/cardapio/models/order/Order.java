package com.unifor.cardapio.models.order;

import java.util.Date;

import com.unifor.cardapio.models.client.Client;
import com.unifor.cardapio.models.store.Store;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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

	@OneToOne
	@JoinColumn(name = "fk_store")
	private Store store;
}
