import { Component, OnInit } from '@angular/core';
import { ColorListModel } from 'src/app/models/colorListModel';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors :ColorListModel[]=[] 
  dataLoaded:boolean=false
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

getColors(){
  this.colorService.getColors().subscribe(response=>{
      this.dataLoaded=false;
      this.colors=response.data;
      this.dataLoaded=true;
  })
}
}
