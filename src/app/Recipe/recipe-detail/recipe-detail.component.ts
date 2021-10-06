import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 
  @Input() data: any;
  @Output() mydata: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  } 

  dataChange() {
    this.mydata.emit("Keyur change in data")
  }
}
