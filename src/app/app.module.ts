import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductlistComponent } from './productlist/productlist.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{ HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
    ProductlistComponent,
    FilterComponent,
    CartComponent,
    HomepageComponent,
    ProductComponent,
    ProductDetailsComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
