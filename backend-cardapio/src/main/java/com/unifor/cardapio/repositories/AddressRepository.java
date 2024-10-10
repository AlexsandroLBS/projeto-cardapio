package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.address.Address;
import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {

}
