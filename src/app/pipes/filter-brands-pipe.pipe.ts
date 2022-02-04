import { BrandListModel } from './../models/brandListModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBrandsPipe'
})
export class FilterBrandsPipePipe implements PipeTransform {

  transform(brands:BrandListModel[], filterText:string): BrandListModel[] {
    filterText = filterText ? filterText.toLocaleLowerCase():"";
    return filterText ? brands.filter(b => b.name.toLowerCase().indexOf(filterText)!==-1):brands;
  }
}
