package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.store.Store;

import java.util.List;
import java.util.Optional;

public interface IStoreService {
    List<Store> findAll();
    Optional<Store> findById(Integer id);
    Store save(Store store);
    void deleteById(Integer id);
}