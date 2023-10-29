import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { UIChangeComponent } from './ui-change/ui-change.component';
import { AddCircleTaskComponent } from './add-circle-task/add-circle-task.component';
import { ShoppingAppUIComponent } from './shopping-app-ui/shopping-app-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingAddItemComponent } from './shopping-add-item/shopping-add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { AngularTableComponent } from './angular-table/angular-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UIChangeComponent,
    AddCircleTaskComponent,
    ShoppingAppUIComponent,
    ShoppingAddItemComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    AngularTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
