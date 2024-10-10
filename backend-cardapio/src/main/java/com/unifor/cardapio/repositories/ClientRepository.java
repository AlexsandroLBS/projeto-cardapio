package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.client.Client;
import java.util.UUID;

public interface ClientRepository extends JpaRepository<Client, UUID> {

}
