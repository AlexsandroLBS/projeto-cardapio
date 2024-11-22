package com.unifor.cardapio.services;

import com.unifor.cardapio.models.orderItem.OrderItem;
import com.unifor.cardapio.repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> findAll() {
        return orderItemRepository.findAll();
    }

    public Optional<OrderItem> findById(Integer id) {
        return orderItemRepository.findById(id);
    }

    public OrderItem save(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public void deleteById(Integer id) {
        orderItemRepository.deleteById(id);
    }
}
