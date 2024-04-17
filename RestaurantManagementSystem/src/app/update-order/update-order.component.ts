import { Component } from '@angular/core';
import { MenuModel } from '../menu-model.model';
import { OrderModel } from '../order-model.model';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrl: './update-order.component.css'
})
export class UpdateOrderComponent {
  id!: number;
  order:OrderModel = new OrderModel();
  constructor(private orderService: OrderService,
  private route: ActivatedRoute, private router: Router) { }
  private getMenuById() {
  this.id = this.route.snapshot.params['id'];
  this.orderService.getOrderById(this.id).subscribe({
  next: (data) => {
  this.order = data;
  },
  error: (e) => {
  console.log(e);
  }
  });
  }
  ngOnInit(): void {
  this.getMenuById();
  }
  updateUser() {
  this.orderService.updateOrder(this.id, this.order).subscribe({
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
  this.updateUser();
  }
 }
