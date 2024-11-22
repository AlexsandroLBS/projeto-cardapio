package com.unifor.cardapio.controllers;

import com.unifor.cardapio.models.store.Store;
import com.unifor.cardapio.services.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stores")
public class StoreController {
    @Autowired
    private StoreService storeService;

    @GetMapping
    public List<Store> findAll() {
        return storeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Store> findById(@PathVariable Integer id) {
        Optional<Store> store = storeService.findById(id);
        return store.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Store save(@RequestBody Store store) {
        return storeService.save(store);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        storeService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
