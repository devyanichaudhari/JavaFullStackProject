import { Component } from '@angular/core';
import { OrderModel } from '../order-model.model';
import { OrderService } from '../services/order.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  order: OrderModel = new OrderModel();
  constructor(private userService: OrderService, private router: Router) { }
  ngOnInit(): void {
  }
  saveUser() {
  this.userService.createOrder(this.order).subscribe({
  next: (data) => {
  console.log(data);
  this.redirectToUserList();
  },
  error: (e) => {
  console.log(e);
  }
  });
  }
  redirectToUserList() {
  this.router.navigate(['/order_route']);
  }
  onSubmit() {
  console.log(this.order);
  this.saveUser();
  }
  total()
  {
    this.order.total=this.order.price*this.order.quantity
  }
}
