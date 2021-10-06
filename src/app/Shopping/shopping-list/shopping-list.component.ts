import { Component, OnInit } from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';




@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingradient[]=[
   new Ingradient('apple', 5),
   new Ingradient('Tomatose', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngradientAdded(ingradient: Ingradient){
    this.ingradients.push(ingradient);
  }

 

}
