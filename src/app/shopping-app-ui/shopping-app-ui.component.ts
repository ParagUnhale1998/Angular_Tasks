import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shopping-app-ui',
  templateUrl: './shopping-app-ui.component.html',
  styleUrls: ['./shopping-app-ui.component.scss']
})
export class ShoppingAppUIComponent {
  products: any[] = [];
  cartItems: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
   

    this.apiService.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(data)
      console.log(this.products)
    });
  }

}
