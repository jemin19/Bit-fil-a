import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'; 
import { WishlistService } from 'src/app/services/wishlist.service'; 
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product; 

  @Input() addedToWishlist: boolean;  

  isCollapsed: boolean = true; 

  constructor(private message: MessengerService,
              private cartService: CartService,
              private wishlistService: WishlistService 
              ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.message.sendMsg(this.productItem)
    })
  }

  handleAddToWishList() {
    this.wishlistService.addToWishList(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true; 
    })
  }
  
  handleRemoveFromWishList(){
    this.wishlistService.removeFromWishList(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false; 
    })
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed; 
  }
  
}
