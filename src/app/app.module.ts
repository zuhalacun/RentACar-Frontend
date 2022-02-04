import { LoginComponent } from './components/login/login.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {TabViewModule} from 'primeng/tabview';
import {RippleModule} from 'primeng/ripple';
import {PasswordModule} from 'primeng/password'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './components/nav/nav.component';
import { CityComponent } from './components/city/city.component';
import { FilterBrandsPipePipe } from './pipes/filter-brands-pipe.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ContectComponent } from './components/contect/contect.component';
import { RentalconComponent } from './components/rentalcon/rentalcon.component';





@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    BrandAddComponent,
    ColorComponent,
    CarComponent,
    CarAddComponent,
    LoginComponent,
    NavComponent,
    CityComponent,
    FilterBrandsPipePipe,
    CarAddComponent,
    RentalComponent,
    PaymentComponent,
    CarDetailComponent,
    ContectComponent,
    RentalconComponent,
    
  
    
  ],
  imports: [
    BrowserModule, //angular dan gelir.
    AppRoutingModule, //angular dan gelir.
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    TabViewModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent] //bu modülün başlangıç componenti.bu uygulama bu componentten başlar demek.
})
export class AppModule { }
