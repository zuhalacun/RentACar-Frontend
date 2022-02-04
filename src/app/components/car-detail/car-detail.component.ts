import { CarService } from './../../services/car.service';

import { ActivatedRoute } from '@angular/router';
import { CarModel } from './../../models/carModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
car:CarModel;
  constructor(private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.getByCarId();
  }

  getByCarId(){
    this.activatedRoute.params.subscribe(params=>{
      if(params['id']){
        this.carService.getByCarId(params['id']).subscribe(response=>{
          this.car=response.data;
        })
      }
    })
  }
}
