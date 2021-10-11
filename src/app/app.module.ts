import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { RecipesComponent } from './Recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './Shopping/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeItemComponent } from './Recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListService } from './Shopping/shopping-list/shopping-list.service';
import { RecipeService } from './Recipe/recipe.service';
import { RecipeEditComponent } from './Recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './Recipe/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
