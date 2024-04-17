package com.ascent.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.ascent.entity.Employee;
@Service
public interface EmployeeService {
	Employee createEmployee(Employee e);
	Employee updateEmployee(Employee e);
	List<Employee> getAllEmployee();
	Employee getEmployeeById(int id);
	void deleteEmployee(int id);
}
