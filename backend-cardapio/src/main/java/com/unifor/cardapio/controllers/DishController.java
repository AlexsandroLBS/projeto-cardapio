package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IDishController;
import com.unifor.cardapio.models.dish.Dish;
import com.unifor.cardapio.models.user.User;
import com.unifor.cardapio.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dishes")
public class DishController implements IDishController {

    @Autowired
    private DishRepository dishRepository;

    @Autowired
    private com.unifor.cardapio.repositories.UserRepository userRepository;

    @PostMapping
    public Dish addDish(@RequestBody Dish dish) {
        return dishRepository.save(dish);
    }

    @PutMapping("/{id}")
    public Dish updateDish(@PathVariable Integer id, @RequestBody Dish updatedDish) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        Dish dish = dishRepository.findById(id).orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        if (!currentUser.getStoreId().equals(dish.getStore().getId())) {
            throw new SecurityException("Você não tem permissão para modificar este prato");
        }

        dish.setName(updatedDish.getName());
        dish.setDescription(updatedDish.getDescription());
        dish.setPrice(updatedDish.getPrice());

        return dishRepository.save(dish);
    }

    @DeleteMapping("/{id}")
    public void deleteDish(@PathVariable Integer id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        Dish dish = dishRepository.findById(id).orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        if (!currentUser.getStoreId().equals(dish.getStore().getId())) {
            throw new SecurityException("Você não tem permissão para excluir este prato");
        }

        dishRepository.delete(dish);
    }

    @GetMapping("/store/{storeId}")
    public List<Dish> getDishesByStore(@PathVariable Integer storeId) {
        return dishRepository.findByStoreId(storeId);
    }
}
