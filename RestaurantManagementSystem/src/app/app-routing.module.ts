import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent },
  {path:'emp_route',component:EmployeeComponent},
  {path:'admin', component: AdminComponent },
  {path:'menu_route',component:MenuComponent},
  {path:'order_route',component:OrderComponent},
  {path:"create_emp",component:CreateEmpComponent},
  {path:"create_menu",component:CreateMenuComponent},
  {path:"create_order",component:CreateOrderComponent},
  {path:"update_emp/:id",component:UpdateEmpComponent},
  {path:"update_menu/:id",component:UpdateMenuComponent},
  {path:"update_order/:id",component:UpdateOrderComponent},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
