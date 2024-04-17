package com.ascent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ascent.entity.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {

}
