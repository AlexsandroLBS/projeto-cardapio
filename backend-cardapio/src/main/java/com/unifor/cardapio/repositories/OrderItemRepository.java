package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.orderItem.OrderItem;
import java.util.UUID;

public interface OrderItemRepository extends JpaRepository<OrderItem, UUID> {

}
