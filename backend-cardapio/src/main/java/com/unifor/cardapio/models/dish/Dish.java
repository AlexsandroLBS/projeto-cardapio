package com.unifor.cardapio.models.dish;

import com.unifor.cardapio.models.store.Store;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;

@Table(name = "dishes")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/**
 * Models dishes from MySQL db
 */
public class Dish {
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String description;
	private Double price;
	private String imageUrl;

	@ManyToOne
	@JoinColumn(name = "fk_store")
	private Store store;
}
