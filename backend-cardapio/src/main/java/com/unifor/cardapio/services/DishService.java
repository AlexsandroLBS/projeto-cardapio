package com.unifor.cardapio.services;

import com.unifor.cardapio.models.dish.Dish;
import com.unifor.cardapio.repositories.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishService {
    @Autowired
    private DishRepository dishRepository;

    public List<Dish> findAll() {
        return dishRepository.findAll();
    }

    public Optional<Dish> findById(Integer id) {
        return dishRepository.findById(id);
    }

    public List<Dish> search(String query) {
        return dishRepository.findByNameContainingIgnoreCase(query);
    }

    public Dish save(Dish dish) {
        return dishRepository.save(dish);
    }

    public void deleteById(Integer id) {
        dishRepository.deleteById(id);
    }
}
