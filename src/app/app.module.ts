
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShopingCartComponent},
  { path: 'check-out', component: CheckOutComponent},
  { path: 'order-success', component: OrderSuccessComponent},
  { path: 'my-orders', component: MyOrdersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin/products', component: AdminProductsComponent},
  { path: 'admin/orders', component: AdminOrdersComponent},

  { path: '**', component: LoginComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShopingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    BsNavbarComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
