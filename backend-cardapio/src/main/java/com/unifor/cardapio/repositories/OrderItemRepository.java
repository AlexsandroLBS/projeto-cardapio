package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.orderItem.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}
