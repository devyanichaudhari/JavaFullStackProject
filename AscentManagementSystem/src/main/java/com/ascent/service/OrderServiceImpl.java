package com.ascent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ascent.entity.Order;
import com.ascent.repository.OrderRepository;
import com.ascent.exception.RestuarantResource;
@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderRepository orderRepo;

	@Override
	public Order createOrder(Order o) {
		
		return orderRepo.save(o);
	}

	@Override
	public Order updateOrder(Order o) {
		Optional<Order> order = orderRepo.findById(o.getId());
		if(order.isPresent())
		{
			Order updateOrder = order.get();
			updateOrder.setId(o.getId());
			updateOrder.setName(o.getName());
			updateOrder.setPrice(o.getPrice());
			updateOrder.setQuantity(o.getQuantity());
			updateOrder.setTotal(o.getTotal());
			orderRepo.save(updateOrder);
			return updateOrder;
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public List<Order> getAllOrder() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}

	@Override
	public Order getOrderById(int id) {
		Optional<Order> Ord = orderRepo.findById(id);
		if(Ord.isPresent())
		{
			return Ord.get();		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public void deleteOrder(int id) {
		Optional<Order> Ord = orderRepo.findById(id);
		if(Ord.isPresent())
		{
			orderRepo.delete(Ord.get());		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
		
	}
}
