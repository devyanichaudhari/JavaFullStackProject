import { Component } from '@angular/core';
import { EmployeeModel } from '../employee-model.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent {
 id!: number;
 user: EmployeeModel = new EmployeeModel();
 constructor(private userService: UserService,
 private route: ActivatedRoute, private router: Router) { }
 private getEmployeeById() {
 this.id = this.route.snapshot.params['id'];
 this.userService.getEmployeeById(this.id).subscribe({
 next: (data) => {
 this.user = data;
 },
 error: (e) => {
 console.log(e);
 }
 });
 }
 ngOnInit(): void {
 this.getEmployeeById();
 }
 updateUser() {
 this.userService.updateEmployee(this.id, this.user).subscribe({
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
 this.updateUser();
 }
}

