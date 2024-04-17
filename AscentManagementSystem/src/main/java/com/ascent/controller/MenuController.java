package com.ascent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ascent.entity.Employee;
import com.ascent.entity.Menu;
import com.ascent.entity.Order;
import com.ascent.service.EmployeeService;
import com.ascent.service.MenuService;
import com.ascent.service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/menu")
public class MenuController {
	@Autowired
	MenuService menuService;
	@PostMapping
	public Menu createMenu(@RequestBody Menu m)
	{
		return menuService.createMenu(m);
	}
	@GetMapping
	public List<Menu>getAllMenu()
	{
		return menuService.getAllMenu();
	}
	@GetMapping(value = "/{id}")
	public Menu getMenuById(@PathVariable("id") int id) 
	{
		
		return menuService.getMenuById(id);
	}
	@DeleteMapping(value = "/{id}")
	public void deleteMenu(@PathVariable("id")int id)
	{
		menuService.deleteMenu(id);
	}
		
	@PutMapping(value = "/{id}")
	public Menu updateMenu(@PathVariable("id")int id,@RequestBody Menu m) 
	{
		m.setId(id);
		return menuService.updateMenu(m);
	}
	
}
