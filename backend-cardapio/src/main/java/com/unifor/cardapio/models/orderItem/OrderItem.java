package com.unifor.cardapio.models.orderItem;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.unifor.cardapio.models.order.Order;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "order-dishes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/**
 * Models list of items in a order from order-dishes MySQL table
 */
public class OrderItem {
	@Id
	@GeneratedValue
	private Integer Id;
	private Integer amount;
	private Double price;
	private String itemDescription;
	private String itemName;

	@ManyToOne
	@JoinColumn(name = "fk_order")
	@JsonIgnore
	private Order order;


}
