package com.ascent.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Order_info")
@Data
@RequiredArgsConstructor
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="name")
	private String name;
	@Column(name="price")
	private int price;
	@Column(name="quantity")
	private int quantity;
	@Column(name="total")
	private int total;
	public Order(String name, int price, int quantity, int total) {
		super();
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.total = total;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", name=" + name + ", price=" + price + ", quantity=" + quantity + ", total=" + total
				+ "]";
	}
}
