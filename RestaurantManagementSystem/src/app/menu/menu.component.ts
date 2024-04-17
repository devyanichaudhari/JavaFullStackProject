import { Component } from '@angular/core';
import { MenuModel } from '../menu-model.model';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menus: MenuModel[] | undefined;
  constructor(private menuService: MenuService, private router: Router) {
  }
  ngOnInit(): void {
  this.getUsers();
  }
  private getUsers() {
  this.menuService.getAllMenu().subscribe(data => {
  this.menus = data;
  });
  }
  updateMenu(id: number) {
  this.router.navigate(['/update_menu', id]);
  }
  deleteMenu(id: number) {
  this.menuService.deleteMenu(id).subscribe(data => {
  console.log(data);
  this.getUsers();
  });
  }
  add()
  {
    this.router.navigate(['/create_menu']);
  }
}
