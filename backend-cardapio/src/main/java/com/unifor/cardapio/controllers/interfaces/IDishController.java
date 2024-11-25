package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.dish.Dish;

import java.util.List;

public interface IDishController {
    Dish addDish(Dish dish);
    Dish updateDish(Integer id, Dish updatedDish);
    void deleteDish(Integer id);
    List<Dish> getDishesByStore(Integer storeId);
}
