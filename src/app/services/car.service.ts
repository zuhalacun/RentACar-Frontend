import { CarModel } from './../models/carModel';
import { CarListModel } from './../models/carListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string="http://localhost:8080/api/cars/"
  
  constructor(private httpClient:HttpClient) {}

    getCars():Observable<ListResponseModel<CarListModel>>{
      return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"getall?pageNo=1&pageSize=10")
  }

  getCarsByBrandId(id:number):Observable<ListResponseModel<CarListModel>>{
    let newUrl:string = this.apiUrl + "find-all-by-brand-id?brandId=" + id+"&pageNo=1&pageSize=10";
    return this.httpClient.get<ListResponseModel<CarListModel>>(newUrl);
  }
  getByCarId(id:number):Observable<SingleResponseModel<CarModel>>{
    let newUrl:string=this.apiUrl+"find-by-id/"+id
    return this.httpClient.get<SingleResponseModel<CarModel>>(newUrl);
  }
}
