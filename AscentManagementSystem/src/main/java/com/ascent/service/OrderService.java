package com.ascent.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.ascent.entity.Order;

@Service
public interface OrderService {
	Order createOrder(Order o);
	Order updateOrder(Order o);
	List<Order> getAllOrder();
	Order getOrderById(int id) ;
	void deleteOrder(int id);
}
