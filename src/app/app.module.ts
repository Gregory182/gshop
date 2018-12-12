import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

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
import { AdminAuthGuardService } from './services/admin-auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shopping-cart', component: ShopingCartComponent},

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},

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
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
