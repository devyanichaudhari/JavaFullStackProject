package com.ascent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ascent.entity.Order;
import com.ascent.service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/order")
public class OrderController {

	@Autowired
	OrderService orderService;
	@PostMapping
	public Order createOrder(@RequestBody Order o)
	{
		return orderService.createOrder(o);
	}
	@GetMapping
	public List<Order>getAllOrder()
	{
		return orderService.getAllOrder();
	}
	@GetMapping(value = "/{id}")
	public Order getOrderById(@PathVariable("id") int id)
	{
		
		return orderService.getOrderById(id);
	}
	@DeleteMapping(value = "/{id}")
	public void deleteOrder(@PathVariable("id")int id)
	{
		orderService.deleteOrder(id);
	}
		
	@PutMapping(value = "/{id}")
	public Order updateOrder(@PathVariable("id")int id,@RequestBody Order o)
	{
		o.setId(id);
		return orderService.updateOrder(o);
	}

}
