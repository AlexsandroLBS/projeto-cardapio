package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.order.Order;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {

}
