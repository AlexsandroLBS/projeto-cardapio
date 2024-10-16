package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.store.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {

}
