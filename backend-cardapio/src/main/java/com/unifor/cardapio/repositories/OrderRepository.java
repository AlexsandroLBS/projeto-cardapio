package com.unifor.cardapio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unifor.cardapio.models.order.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}
