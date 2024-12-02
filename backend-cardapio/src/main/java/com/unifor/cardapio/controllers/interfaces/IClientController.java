package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.client.Client;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IClientController {
    List<Client> findAll();
    ResponseEntity<Client> findById(Integer id);
    ResponseEntity<Client> save(Client client);
    ResponseEntity<Void> deleteById(Integer id);
}
