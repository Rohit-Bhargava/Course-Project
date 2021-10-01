import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: ShoppingListComponent},
  {path: 'recipe-book', component: RecipeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
