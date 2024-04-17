import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    AdminnavComponent,
    AdminsideComponent,
    EmployeeComponent,
    OrderComponent,
    MenuComponent,
    CreateEmpComponent,
    CreateMenuComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    UpdateMenuComponent,
    UpdateEmpComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
