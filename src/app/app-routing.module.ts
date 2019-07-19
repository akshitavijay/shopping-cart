import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { OrderComponent } from 'src/app/order/order.component';
import { LastComponent } from 'src/app/last/last.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "cart", component:CartComponent},
  {path: "order",component:OrderComponent},
  {path: "last",component:LastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
