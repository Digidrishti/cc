import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { AddToCartComponent } from './common/add-to-cart/add-to-cart.component';
import { LoginComponent } from './auth/login/login/login.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { WishListComponent } from './common/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddToCartComponent,LoginComponent,ProductDetailsComponent,WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
    // CommonRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
