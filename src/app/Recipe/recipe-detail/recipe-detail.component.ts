import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { ShoppingListService } from 'src/app/Shopping/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngradientsToShoppingList(this.recipe.ingradients);
  }

}
