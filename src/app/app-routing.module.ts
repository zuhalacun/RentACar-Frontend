import { RentalconComponent } from './components/rentalcon/rentalcon.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';

import { CarComponent } from './components/car/car.component';
import { CityComponent } from './components/city/city.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ContectComponent } from './components/contect/contect.component';

export const routes: Routes = [     // router-outlet te ne göstermek istersek buraya yazılır.
  {path: '', component: CarComponent},
  {path:'brands', component: BrandComponent},
  {path:'brand/:brandId', component:CarComponent},
  {path:'login', component:LoginComponent},
  {path:'rental/:id', component:RentalComponent},
  {path:'rental', component:RentalComponent},
  {path:'payment', component:PaymentComponent},
  {path:'cities',component:CityComponent},
  {path:'cardetail/:id', component:CarDetailComponent},
  {path:'contect', component:ContectComponent},
  {path:'rentalcon', component:RentalconComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
