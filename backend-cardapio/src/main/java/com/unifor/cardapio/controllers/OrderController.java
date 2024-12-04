package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IOrderController;
import com.unifor.cardapio.models.order.Order;
import com.unifor.cardapio.models.orderItem.OrderItem;
import com.unifor.cardapio.models.store.Store;
import com.unifor.cardapio.services.OrderService;
import com.unifor.cardapio.services.StoreService;
import com.unifor.cardapio.services.interfaces.IOrderService;
import com.unifor.cardapio.services.interfaces.IStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController implements IOrderController {
    @Autowired
    private IOrderService orderService;

    @Autowired
    private IStoreService storeService;

    @GetMapping
    public List<Order> findAll() {
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findById(@PathVariable Integer id) {
        Optional<Order> order = orderService.findById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Order> save(@RequestBody Order order) {
        try {
            Store store = storeService.findById(order.getStore().getId()).orElse(null);
            order.setStore(store);

            if (order.getItems() != null) {
                for (OrderItem item : order.getItems()) {
                    item.setOrder(order);
                }
            }

            Order savedOrder = orderService.save(order);
            return ResponseEntity.ok(savedOrder);
        } catch (RuntimeException e) {
            throw new RuntimeException("Erro ao salvar o pedido", e);
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        orderService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}