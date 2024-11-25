package com.unifor.cardapio.services;

import com.unifor.cardapio.models.address.Address;
import com.unifor.cardapio.repositories.AddressRepository;
import com.unifor.cardapio.services.interfaces.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressService implements IAddressService {
    @Autowired
    private AddressRepository addressRepository;

    public List<Address> findAll() {
        return addressRepository.findAll();
    }

    public Optional<Address> findById(Integer id) {
        return addressRepository.findById(id);
    }

    public Address save(Address address) {
        return addressRepository.save(address);
    }

    public void deleteById(Integer id) {
        addressRepository.deleteById(id);
    }
}
