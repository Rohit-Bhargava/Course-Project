import { Recipe } from "./recipe.model";
import { Ingradient } from "../shared/ingradient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../Shopping/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] =[
    new Recipe( "panipuri is a Indian recipe",
      "panipuri",
      "assets/image/panipuri.jpg",
      [
        new Ingradient('appel', 4)
      ]),
    new Recipe( "smosha is a Indian recipe",
      "smosha",
      "assets/image/samosha.jpg",
      [
        new Ingradient('appel',6)
      ]),
    new Recipe("pizza is a western recipe", "pizza", "assets/image/pizza.jpg",[
      new Ingradient('banana', 5)
    ])
  ];
  // recipeSelected: { subscribe: (arg0: (recipe: Recipe) => void) => void; emit: (arg0: Recipe) => void; }

  constructor(private slService: ShoppingListService){}
  

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngradientsToShoppingList(ingradiants: Ingradient[]){
    this.slService.addIngradients(ingradiants);
  }

}