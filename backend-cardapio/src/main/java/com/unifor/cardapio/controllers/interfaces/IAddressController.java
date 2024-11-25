package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.address.Address;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IAddressController {
    List<Address> findAll();
    ResponseEntity<Address> findById(Integer id);
    Address save(Address address);
    ResponseEntity<Void> deleteById(Integer id);
}
