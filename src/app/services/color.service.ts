import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorListModel } from '../models/colorListModel';
import { CreateColorModel } from '../models/createColorModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:string="http://localhost:8080/api/colors/"
  constructor(private httpClient:HttpClient) {}

  getColors():Observable<ListResponseModel<ColorListModel>>{
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl+"getall")
}
add(color: CreateColorModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, color);
}
}
