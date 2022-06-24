import { Component, OnInit } from '@angular/core';
import { CartService } from '../productServices/cart.service';
import { WishlistService } from '../productServices/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalCartItem = 0;
  totalWishList = 0;

  cartProductList : any = [];
  productWishList : any = [];
 
  constructor(private cartService : CartService,
    private wishListService : WishlistService) { }
 
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.totalCartItem = res.length;
      this.cartProductList = res;
    });

    console.log(this.cartProductList);

    this.wishListService.getProducts()
    .subscribe((res)=>{
      this.totalWishList = res.length;
      this.productWishList = res;
    })

    console.log(this.productWishList);
  }

}
