package com.ascent.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="Employee")
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int Eid;
	private String Ename;
	private String Edesignation;
	private String Econtact;
	public Employee(String ename, String edesignation, String econtact) {
		super();
		Ename = ename;
		Edesignation = edesignation;
		Econtact = econtact;
	}
	@Override
	public String toString() {
		return "Employee [Eid=" + Eid + ", Ename=" + Ename + ", Edesignation=" + Edesignation + ", Econtact=" + Econtact
				+ "]";
	}
}
