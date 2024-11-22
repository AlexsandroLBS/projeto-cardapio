package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.dish.Dish;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Integer> {
    List<Dish> findByNameContainingIgnoreCase(String name);
    List<Dish> findByStoreId(Integer storeId);

}
