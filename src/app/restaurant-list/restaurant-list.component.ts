import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService,private router:Router) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurantData().subscribe((data:any) => {
      this.restaurants = data;
    });
  }

//   NavigateToDetails(id:any){
// this.router.navigateByUrl(`/restaurant/${id}`)
//   }
   NavigateToDetails(id:any){
this.router.navigateByUrl(`/restaurant/${id}`)
  }
}
