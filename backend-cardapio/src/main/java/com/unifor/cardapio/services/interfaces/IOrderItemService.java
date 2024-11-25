package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.orderItem.OrderItem;

import java.util.List;
import java.util.Optional;

public interface IOrderItemService {
    List<OrderItem> findAll();
    Optional<OrderItem> findById(Integer id);
    OrderItem save(OrderItem orderItem);
    void deleteById(Integer id);
}