import { Recipe } from "./recipe.model";
import { Ingradient } from "../shared/ingradient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../Shopping/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] =[
    new Recipe( 1,
      "panipuri",
      "assets/image/panipuri.jpg",
      [
        new Ingradient('appel', 4)
      ]),
    new Recipe( 2,
      "smosha",
      "assets/image/samosha.jpg",
      [
        new Ingradient('appel',6)
      ]),
    new Recipe(3, "pizza", "assets/image/pizza.jpg",[
      new Ingradient('banana', 5)
    ])
  ];
  // recipeSelected: { subscribe: (arg0: (recipe: Recipe) => void) => void; emit: (arg0: Recipe) => void; }

  constructor(private slService: ShoppingListService){}
  

  getRecipe(){
    return this.recipe.slice()
  }

  addIngradientsToShoppingList(ingradiants: Ingradient[]){
    this.slService.addIngradients(ingradiants);
  }

  
  getRecipes(): Recipe[] {
    return this.recipe;
  }
}