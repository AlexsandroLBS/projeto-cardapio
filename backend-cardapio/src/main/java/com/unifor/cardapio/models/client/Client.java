package com.unifor.cardapio.models.client;

import java.util.UUID;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Table(name = "clients")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/**
 * Models clients from MySQL db
 */
public class Client {
	@Id
	@GeneratedValue
	private UUID id;
	private String name;
	private String email;
	private String password;
	private String phone;
	private String imgUrl;
}
