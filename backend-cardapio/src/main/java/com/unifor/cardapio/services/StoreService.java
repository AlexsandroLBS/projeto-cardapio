package com.unifor.cardapio.services;

import com.unifor.cardapio.models.store.Store;
import com.unifor.cardapio.repositories.StoreRepository;
import com.unifor.cardapio.services.interfaces.IStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService implements IStoreService {
    @Autowired
    private StoreRepository storeRepository;

    public List<Store> findAll() {
        return storeRepository.findAll();
    }

    public Optional<Store> findById(Integer id) {
        return storeRepository.findById(id);
    }

    public Store save(Store store) {
        return storeRepository.save(store);
    }

    public void deleteById(Integer id) {
        storeRepository.deleteById(id);
    }
}
