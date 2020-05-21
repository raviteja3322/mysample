import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsmComponent } from '../recipes/recipe-details/recipe-detailsm.component';

import {RecipesRoutingModule} from './recipes-routing.module';

@NgModule({
  declarations: [RecipesComponent,RecipeListComponent,RecipeItemComponent,RecipeDetailsmComponent],
  imports: [
    CommonModule,RecipesRoutingModule
  ]
})
export class RecipesModule { 
  constructor(){
    console.log("RecipesModule");
  }
}
