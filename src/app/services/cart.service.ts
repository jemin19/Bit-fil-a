import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Cart } from '../models/cart';
import { HttpClient } from '@angular/common/http'; 
import { cartUrl } from 'src/app/config/api';
import { Product } from '../models/product'; 
import { map } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }
  

  getCartItems(): Observable<Cart[]> {
    //We need to modify mapping the obtained result to cartitem props. 
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
      let cartItems: Cart[] = [];
        
        for(let items of result){
        let firstItem = false

        for(let item in cartItems) {
          if(cartItems[item].productId === items.product.id){
            cartItems[item].qty++
            firstItem = true
            break; 
          }
        }
      
        if(!firstItem){
          cartItems.push(new Cart(items.id, items.product));  
          }
        }
        return cartItems; 
      })
    ); 
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, {product}); 
  }



}
