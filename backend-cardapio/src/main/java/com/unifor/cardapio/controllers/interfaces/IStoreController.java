package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.store.Store;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IStoreController {
    List<Store> findAll();
    ResponseEntity<Store> findById(Integer id);
    ResponseEntity<Store> save(Store store);
    ResponseEntity<Void> deleteById(Integer id);
}
