package com.ascent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ascent.entity.Employee;
import com.ascent.repository.EmployeeRepository;
import com.ascent.exception.RestuarantResource;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	EmployeeRepository empRepo;

	@Override
	public Employee createEmployee(Employee e) {
		return empRepo.save(e);
	}

	@Override
	public Employee updateEmployee(Employee e) {
		Optional<Employee> employee = empRepo.findById(e.getEid());
		if(employee.isPresent())
		{
			Employee updateEmployee = employee.get();
			updateEmployee.setEid(e.getEid());
			updateEmployee.setEname(e.getEname());
			updateEmployee.setEcontact(e.getEcontact());
			updateEmployee.setEdesignation(e.getEdesignation());
			empRepo.save(updateEmployee);
			return updateEmployee;
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	@Override
	public Employee getEmployeeById(int id) {
		Optional<Employee> emp = empRepo.findById(id);
		if(emp.isPresent())
		{
			return emp.get();		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}
	}

	@Override
	public void deleteEmployee(int id) {
		Optional<Employee> emp1 = empRepo.findById(id);
		if(emp1.isPresent())
		{
			empRepo.delete(emp1.get());		
		}
		else
		{
			throw new RestuarantResource("Searching id is not available");
		}	
		
	}

}
