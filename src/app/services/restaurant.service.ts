import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'assets/restaurents.json'

  constructor(private http: HttpClient) {}

  getRestaurantData(){
    return this.http.get(this.apiUrl);
  }
  
  getRestaurantById(id: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map( (restaurants:any) =>  restaurants.find((restaurant:any) =>  restaurant.id === id))
    );
  }

}
