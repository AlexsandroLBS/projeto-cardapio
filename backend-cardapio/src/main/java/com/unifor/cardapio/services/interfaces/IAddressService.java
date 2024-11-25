package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.address.Address;

import java.util.List;
import java.util.Optional;

public interface IAddressService {
    List<Address> findAll();
    Optional<Address> findById(Integer id);
    Address save(Address address);
    void deleteById(Integer id);
}
