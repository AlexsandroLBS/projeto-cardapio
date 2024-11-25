package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IAddressController;
import com.unifor.cardapio.models.address.Address;
import com.unifor.cardapio.services.AddressService;
import com.unifor.cardapio.services.interfaces.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/addresses")
public class AddressController implements IAddressController {
    @Autowired
    private IAddressService addressService;

    @GetMapping
    public List<Address> findAll() {
        return addressService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> findById(@PathVariable Integer id) {
        Optional<Address> address = addressService.findById(id);
        return address.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Address save(@RequestBody Address address) {
        return addressService.save(address);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        addressService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
