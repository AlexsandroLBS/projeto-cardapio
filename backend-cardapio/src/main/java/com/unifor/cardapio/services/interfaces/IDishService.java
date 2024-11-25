package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.dish.Dish;

import java.util.List;
import java.util.Optional;

public interface IDishService {
    List<Dish> findAll();
    Optional<Dish> findById(Integer id);
    List<Dish> search(String query);
    Dish save(Dish dish);
    void deleteById(Integer id);
}