import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel } from '../menu-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl="http://localhost:9091/menu"
  constructor(private httpClient:HttpClient) { }
  getAllMenu(): Observable<MenuModel[]> {
    return this.httpClient.get<MenuModel[]>(`${this.baseUrl}`);
    }
    createMenu(user: MenuModel): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
    }
    getMenuById(id: number): Observable<MenuModel>{
      return this.httpClient.get<MenuModel>(`${this.baseUrl}/${id}`);
      }
      updateMenu(id:number, user:MenuModel): Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`, user);
      }
      deleteMenu(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
      }
}
