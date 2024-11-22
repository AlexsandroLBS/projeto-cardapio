package com.unifor.cardapio.models.store;

import java.util.Date;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

/**
 * Models stores from MySQL db
 */
@Table(name = "stores")
@Entity
public class Store {
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String description;
	private String address;
	private String phone;
	private String imageUrl;
	private Date created_at;

	// Getters
	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public String getAddress() {
		return address;
	}

	public String getPhone() {
		return phone;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Date getCreatedAt() {
		return created_at;
	}

	public Integer getStoreId() {
		return id;
	}

	// Setters
	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}


}
