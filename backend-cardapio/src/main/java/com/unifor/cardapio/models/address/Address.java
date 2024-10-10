package com.unifor.cardapio.models.address;

import java.util.UUID;

import com.unifor.cardapio.models.client.Client;

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

@Table(name = "addresses")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
/**
 * Models registered client addresses from MySQL db
 */
public class Address {
	@Id
	@GeneratedValue
	private UUID id;
	private String address;
	private String complement;
	private String city;
	private String state;
	private String CEP;

	@ManyToOne
	@JoinColumn(name = "fk_client")
	private Client client;
}
