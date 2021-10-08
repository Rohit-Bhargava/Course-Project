import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './Recipe/recipes/recipes.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: ShoppingListComponent},
  {path: 'recipe-book', component: RecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
