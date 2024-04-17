package com.ascent.entity;

import java.util.Set;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name="menu_info")
@NoArgsConstructor
public class Menu {
	public Menu(String menuName, int price) {
		super();
		this.menuName = menuName;
		this.price = price;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="menu_name")
	private String menuName;
	@Column(name="menu_price")
	private int price;
	@Override
	public String toString() {
		return "Menu [id=" + id + ", menuName=" + menuName + ", price=" + price + "]";
	}
	
	
}
