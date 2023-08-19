import { WishListComponent } from './common/wish-list/wish-list.component';
import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { LoginComponent } from './auth/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './common/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productDetails/:id', component:ProductDetailsComponent},
  { path: 'addToCart/:id', component: AddToCartComponent },
  {path:'wishlist',component:WishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
