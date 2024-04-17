import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../employee-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:9091/emp"
  constructor(private httpClient: HttpClient) { 

  }
  getAllEmployee(): Observable<EmployeeModel[]> {
    return this.httpClient.get<EmployeeModel[]>(`${this.baseUrl}`);
    }
    createEmployee(user: EmployeeModel): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
    }
    getEmployeeById(id: number): Observable<EmployeeModel>{
      return this.httpClient.get<EmployeeModel>(`${this.baseUrl}/${id}`);
      }
      updateEmployee(id:number, user:EmployeeModel): Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`, user);
      }
      deleteEmployee(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
      }
}
