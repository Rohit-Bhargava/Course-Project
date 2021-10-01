import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  rlist=[
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

  constructor() { }

  ngOnInit(): void {
  }

}
