import { CarListModel } from './../../models/carListModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars :CarListModel[]=[] 
  currentCar: CarListModel;
  dataLoaded:boolean=false
  
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  
  title="Tüm Arabalar"
  
  ngOnInit(): void {

   this.activatedRoute.params.subscribe(params=>{
     if(params["brandId"]){  // url kısmında brandId varsa 
       this.getCarsByBrandId(params["brandId"]) // burası çalışcak.
     }else{ // yoksa, yani url yalnızca localhost:4200 şeklinde ise else bloğu çalışacak.
       this.getCars(); // bu method çalışcak.
     }
   })
  }


getCars(){ // burası ise bütün arabaları getiren method.
  this.carService.getCars().subscribe(response=>{
    console.log(response.data);
    
      this.dataLoaded=false;
      this.cars=response.data;
      this.dataLoaded=true;
  })
}


getCarsByBrandId(brandId:number){ // Burası yalnızca brandId'ye göre araba getiren method.
  this.carService.getCarsByBrandId(brandId).subscribe(response=>{
    this.cars=response.data;
    this.dataLoaded=true;
  })
}
}