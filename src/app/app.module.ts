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

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UIChangeComponent,
    AddCircleTaskComponent,
    ShoppingAppUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
