import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRecipeAppRoutingModule } from './food-recipe-app-routing.module';
import { FoodhomeComponent } from './foodhome/foodhome.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodHomeComponent } from './food-home/food-home.component';


@NgModule({
  declarations: [
    FoodhomeComponent,
    FoodDetailComponent,
    FoodHomeComponent
  ],
  imports: [
    CommonModule,
    FoodRecipeAppRoutingModule
  ],
  exports:[
    FoodhomeComponent,
    FoodDetailComponent,
    FoodHomeComponent
  ]
})
export class FoodRecipeAppModule { }
