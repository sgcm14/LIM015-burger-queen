import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component: HomeBodyComponent},
  {path : 'booking', component: BookingComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'kitchen', component: KitchenComponent},
  {path : 'orders', component: OrdersComponent},
  {path : '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
