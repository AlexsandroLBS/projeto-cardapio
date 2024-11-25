package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IOrderItemController;
import com.unifor.cardapio.models.orderItem.OrderItem;
import com.unifor.cardapio.services.OrderItemService;
import com.unifor.cardapio.services.interfaces.IOrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order-items")
public class OrderItemController implements IOrderItemController {
    @Autowired
    private IOrderItemService orderItemService;

    @GetMapping
    public List<OrderItem> findAll() {
        return orderItemService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItem> findById(@PathVariable Integer id) {
        Optional<OrderItem> orderItem = orderItemService.findById(id);
        return orderItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public OrderItem save(@RequestBody OrderItem orderItem) {
        return orderItemService.save(orderItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        orderItemService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
