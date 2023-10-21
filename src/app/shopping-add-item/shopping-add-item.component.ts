import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shopping-add-item',
  templateUrl: './shopping-add-item.component.html',
  styleUrls: ['./shopping-add-item.component.scss']
})
export class ShoppingAddItemComponent {
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

  addToCart(product:any){
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

  }
  removeFromCart(index:any){
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateTotalPrice(){
    this.calculateTotalPrice()
  }
}
