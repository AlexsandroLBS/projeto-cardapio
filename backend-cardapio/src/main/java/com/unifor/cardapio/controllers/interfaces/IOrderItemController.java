package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.orderItem.OrderItem;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IOrderItemController {
    List<OrderItem> findAll();
    ResponseEntity<OrderItem> findById(Integer id);
    OrderItem save(OrderItem orderItem);
    ResponseEntity<Void> deleteById(Integer id);
}
