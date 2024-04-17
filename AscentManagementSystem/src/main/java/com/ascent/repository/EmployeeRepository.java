package com.ascent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ascent.entity.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

}
