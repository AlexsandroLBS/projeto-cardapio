package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IStoreController;
import com.unifor.cardapio.models.store.Store;
import com.unifor.cardapio.services.StoreService;
import com.unifor.cardapio.services.interfaces.IStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stores")
public class StoreController implements IStoreController {
    @Autowired
    private IStoreService storeService;

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
    public ResponseEntity<Store> save(@RequestBody Store store) {
        Store savedStore = storeService.save(store);
        return ResponseEntity.ok(savedStore);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        storeService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
