package com.unifor.cardapio.models.store;

import java.util.Date;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Table(name = "stores")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/**
 * Models stores from MySQL db
 */
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
}
