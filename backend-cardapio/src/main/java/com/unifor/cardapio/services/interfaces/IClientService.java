package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.client.Client;

import java.util.List;
import java.util.Optional;

public interface IClientService {
    List<Client> findAll();
    Optional<Client> findById(Integer id);
    Client save(Client client);
    void deleteById(Integer id);
}