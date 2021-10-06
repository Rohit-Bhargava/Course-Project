import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {  
  dataTochild: any;
  message: string;
   rlists = [
    {
    sno: 1,
    name: "panipuri",
    img: "assets/image/panipuri.jpg"
    },
    {
      sno: 2,
      name: "smosha",
      img: "assets/image/samosha.jpg"
    },
    {
      sno: 3,
      name: "pizza",
      img: "assets/image/pizza.jpg"
    }
  ]

  @Input() Rlist: any
  @Output() rlistSelected = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.rlistSelected.emit();
  }

  showDataInManage(data: any){
    this.dataTochild = data;
  }

}
