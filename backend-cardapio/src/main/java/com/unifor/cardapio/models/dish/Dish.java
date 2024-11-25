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


	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public Double getPrice() {
		return price;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Store getStore() {
		return store;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setStore(Store store) {
		this.store = store;
	}
}
