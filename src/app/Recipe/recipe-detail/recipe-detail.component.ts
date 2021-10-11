import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { ShoppingListService } from 'src/app/Shopping/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { __param } from 'tslib';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
 
  

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngradientsToShoppingList(this.recipe.ingradients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
