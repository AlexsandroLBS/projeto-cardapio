package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.order.Order;

import java.util.List;
import java.util.Optional;

public interface IOrderService {
    List<Order> findAll();
    Optional<Order> findById(Integer id);
    Order save(Order order);
    void deleteById(Integer id);
}