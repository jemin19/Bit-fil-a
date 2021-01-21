import { Component, OnInit} from '@angular/core';
import { cartUrl } from 'src/app/config/api';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service'; 
// import { cartUrl } from 'src/app/config/api';  
// import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []; 
  cartTotal = 0 
    
  constructor(private message: MessengerService, 
              private cartService: CartService
              ) { }

ngOnInit() {
  this.handleSubsription(); 
  this.loadCartItems(); 
}

handleSubsription() {
  this.message.getMsg().subscribe((product: Product) => {
    this.loadCartItems(); 
  })
}

loadCartItems() {
  this.cartService.getCartItems().subscribe((items: Cart[]) => {
    // console.log(items); 
    this.cartItems = items; 
    this.cartTotalAmount(); 
  })
}

// addProductToCart(product: Product){

//   let firstItem = false

//   for(let item in this.cartItems) {
//     if(this.cartItems[item].productId === product.id){
//       this.cartItems[item].qty++
//       firstItem = true
//       break; 
//     }
//   }

//   if(!firstItem){
//     this.cartItems.push({
//       productId: product.id, 
//       productName: product.name, 
//       qty: 1,
//       price: product.price
//     })
//   }
  
// this.cartTotalAmount; 
// }

cartTotalAmount() {
  this.cartTotal = 0
  this.cartItems.forEach(item => {
  this.cartTotal += (item.qty * item.price)
  })
}


clearCart(){
  this.cartItems = []; 
  // return this.http.delete(cartUrl + '/' + productId); 
}


}
