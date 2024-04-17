import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../order-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl="http://localhost:9091/order"
  constructor(private httpClient:HttpClient) { }
  getAllOrder(): Observable<OrderModel[]> {
    return this.httpClient.get<OrderModel[]>(`${this.baseUrl}`);
    }
    createOrder(user: OrderModel): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
    }
    getOrderById(id: number): Observable<OrderModel>{
      return this.httpClient.get<OrderModel>(`${this.baseUrl}/${id}`);
      }
      updateOrder(id:number, user:OrderModel): Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`, user);
      }
      deleteOrder(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
      }
}
