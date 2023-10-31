import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path: '', component: RestaurantDetailsComponent },
  {path:'restaurant/:id',component:RestaurantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
