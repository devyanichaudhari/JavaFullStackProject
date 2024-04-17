import { Component } from '@angular/core';
import { EmployeeModel } from '../employee-model.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  users: EmployeeModel[] | undefined;
  constructor(private empService: UserService, private router: Router) {
  }
  ngOnInit(): void {
  this.getUsers();
  }
  private getUsers() {
  this.empService.getAllEmployee().subscribe(data => {
  this.users = data;
  });
  }
  updateUser(id: number) {
  this.router.navigate(['update_emp', id]);
  }
  deleteUser(id: number) {
  this.empService.deleteEmployee(id).subscribe(data => {
  console.log(data);
  this.getUsers();
  });
  }
  addUser()
  {
    this.router.navigate(['/create_emp']);
  }
}
