import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  slist=[
    {
    sno: 1,
    name: "shop"
    },
    {
      sno: 2,
      name: "oil"
    },
    {
      sno: 3,
      name: "dio"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

 

}
