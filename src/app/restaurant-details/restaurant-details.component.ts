import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent {
  hotel: any;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      // Now you have the restaurant ID, and you can fetch details, etc.
      if (id !== undefined) {
        this.restaurantService.getRestaurantById(id).subscribe((data) => {
          this.hotel = data;
          console.log(this.hotel);
        });
      }
    });

   
  }
}
