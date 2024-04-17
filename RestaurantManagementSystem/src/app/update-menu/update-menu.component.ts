import { Component } from '@angular/core';
import { MenuModel } from '../menu-model.model';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrl: './update-menu.component.css'
})
export class UpdateMenuComponent {
  id!: number;
 menu: MenuModel = new MenuModel();
 constructor(private userService: MenuService,
 private route: ActivatedRoute, private router: Router) { }
 private getMenuById() {
 this.id = this.route.snapshot.params['id'];
 this.userService.getMenuById(this.id).subscribe({
 next: (data) => {
 this.menu = data;
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
 this.userService.updateMenu(this.id, this.menu).subscribe({
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
 console.log(this.menu);
 this.updateUser();
 }
}

