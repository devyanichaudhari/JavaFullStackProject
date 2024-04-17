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

import com.ascent.entity.Employee;
import com.ascent.service.EmployeeService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/emp")
public class EmployeeController {
	@Autowired
	EmployeeService empService;
	@PostMapping
	public Employee createEmployee(@RequestBody Employee e)
	{
		return empService.createEmployee(e);
	}
	@GetMapping
	public List<Employee>fetchAllEmployeeDetails()
	{
		return empService.getAllEmployee();
	}
	@GetMapping(value = "/{id}")
	public Employee getEmployeeById(@PathVariable("id") int id)
	{
		
		return empService.getEmployeeById(id);
	}
	@DeleteMapping(value = "/{id}")
	public void deleteEmployee(@PathVariable("id")int id)
	{
		empService.deleteEmployee(id);
	}
		
	@PutMapping(value = "/{id}")
	public Employee updateEmployee(@PathVariable("id")int id,@RequestBody Employee e)
	{
		e.setEid(id);
		return empService.updateEmployee(e);
	}
}
