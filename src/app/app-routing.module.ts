import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './Recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './Recipe/recipe-start/recipe-start.component';

import { RecipesComponent } from './Recipe/recipes/recipes.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipe-book', pathMatch: 'full'},
  {path: 'recipe-book', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component:RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
