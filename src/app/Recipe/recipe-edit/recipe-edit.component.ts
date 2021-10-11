import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm :FormGroup;
  

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  // onSubmit(){
  //   if(this.editMode){
  //     this.recipeService.updateRecipe(this.id, this.recipeForm.value)
  //   } else {
  //     this.recipeService.addRecipe(this.id, this.recipeForm.value)
  //   }
  // }

  private initForm() {
    let recipeNmae = '';
    let recipeImagePath = '';
    let recipeDiscription = '';
    let recipeIngradients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeNmae = recipe.name;
      recipeImagePath = recipe.img;
      recipeDiscription = recipe.discription;
      if(recipe['ingradients']){
        for(let ingradient of recipe.ingradients){
          recipeIngradients.push(
            new FormGroup({
              'name': new FormControl(ingradient.name),
              'amount': new FormControl(ingradient.amount),
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeNmae),
      'imagePath': new FormControl(recipeImagePath),
      'discription': new FormControl(recipeDiscription),
      'ingradients': recipeIngradients,
    })

  }

  updateRecipe(){

  }

  addRecipe(index: number){
    
  }

}

