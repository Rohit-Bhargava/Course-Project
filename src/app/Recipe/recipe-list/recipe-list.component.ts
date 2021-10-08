import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {  
  recipes: Recipe[];
  recepe: Recipe;
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>()

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelect(recipe: Recipe) {
    // this.recipeSelected.emit(recipe);
    this.recepe = recipe;
  }

}
