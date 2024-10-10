package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.dish.Dish;
import java.util.UUID;

public interface DishRepository extends JpaRepository<Dish, UUID> {

}
