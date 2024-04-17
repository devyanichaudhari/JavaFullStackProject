import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { EmployeeModel } from '../employee-model.model';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrl: './create-emp.component.css'
})
export class CreateEmpComponent {
  user: EmployeeModel = new EmployeeModel();
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }
  saveUser() {
  this.userService.createEmployee(this.user).subscribe({
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
  this.router.navigate(['/emp_route']);
  }
  onSubmit() {
  console.log(this.user);
  this.saveUser();
  }
 }
