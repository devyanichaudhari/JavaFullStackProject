import { Component } from '@angular/core';
import { MenuModel } from '../menu-model.model';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrl: './create-menu.component.css'
})
export class CreateMenuComponent {
  user: MenuModel = new MenuModel();
  constructor(private userService: MenuService, private router: Router) { }
  ngOnInit(): void {
  }
  saveUser() {
  this.userService.createMenu(this.user).subscribe({
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
  this.router.navigate(['/menu_route']);
  }
  onSubmit() {
  console.log(this.user);
  this.saveUser();
  }
}
