package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.dish.Dish;

public interface DishRepository extends JpaRepository<Dish, Integer> {

}
