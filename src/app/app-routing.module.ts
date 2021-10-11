import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './Recipe/recipe-edit/recipe-edit.component';

import { RecipesComponent } from './Recipe/recipes/recipes.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipe-book', pathMatch: 'full'},
  {path: 'recipe-book', component: RecipesComponent, children: [
    { path: 'new', component:RecipeEditComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
