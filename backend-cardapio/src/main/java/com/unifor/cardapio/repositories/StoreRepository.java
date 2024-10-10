package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.store.Store;
import java.util.UUID;

public interface StoreRepository extends JpaRepository<Store, UUID> {

}
