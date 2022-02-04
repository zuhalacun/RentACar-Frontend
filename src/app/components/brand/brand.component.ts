import { BrandListModel } from './../../models/brandListModel';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';


@Component({  //component olduğunu belirtir.
  selector: 'app-brand',  //bu component kullanılırken bu değerle çağrılır.
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:BrandListModel[] = [];
  currentBrand:BrandListModel = {name:"",id:-1};
  filterText:string = "";
  constructor(private brandService:BrandService) { }



  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:BrandListModel){
    this.currentBrand=brand;
    console.log(brand.id);
  }

  getCurrentBrand(brand:BrandListModel){
    if(this.currentBrand==brand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}