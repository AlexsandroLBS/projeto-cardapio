package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.order.Order;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IOrderController {
    List<Order> findAll();
    ResponseEntity<Order> findById(Integer id);
    ResponseEntity<Order> save(Order order);
    ResponseEntity<Void> deleteById(Integer id);
}
