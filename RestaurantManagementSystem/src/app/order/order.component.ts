import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderModel } from '../order-model.model';
import { MenuModel } from '../menu-model.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders: OrderModel[] | undefined;
  menus:MenuModel[] |undefined;
  constructor(private orderService: OrderService, private router: Router) {
  }
  ngOnInit(): void {
  this.getUsers();
  }
  private getUsers() {
  this.orderService.getAllOrder().subscribe(data => {
  this.orders = data;
  });
  }
  updateOrder(id: number) {
  this.router.navigate(['update_order', id]);
  }
  deleteOrder(id: number) {
  this.orderService.deleteOrder(id).subscribe(data => {
  console.log(data);
  this.getUsers();
  });
  }
  add()
  {
    this.router.navigate(['create_order']);
  }
  total:number|undefined;
  order:OrderModel[]|undefined;
  totalprice(){
    
  }
}
