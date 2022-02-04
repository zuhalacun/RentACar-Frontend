import { CityListModel } from './../../models/cityListModel';
import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

 cities:CityListModel[]=[]
 currentCity:CityListModel = {name:"",id:-1};
 dataLoaded:boolean=false

  constructor(private cityService:CityService) { }
  title="Şubeler"

  ngOnInit(): void {
    this.getCities()
  }

  getCities(){
     this.cityService.getCities().subscribe(response=>{
      this.dataLoaded=false;
      this.cities=response.data;
      this.dataLoaded=true;
     })
  }
  setCurrentCity(city:CityListModel){
    this.currentCity=city;
    console.log(city.id);
  }

  getCurrentCity(city:CityListModel){
    if(this.currentCity==city){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
  
}

