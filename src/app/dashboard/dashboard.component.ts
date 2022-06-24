import { Component, OnInit } from '@angular/core';
import { ApiService } from '../productServices/api.service';
import { CartService } from '../productServices/cart.service';
import { WishlistService } from '../productServices/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productsData : any = [];
  constructor(
    private apiService : ApiService,
    private cartService : CartService,
    private wishListService : WishlistService
    
    ) { }

  ngOnInit(): void {
    this.apiService.getProductsData().subscribe((response) => {
      this.productsData = response;
    });
  }

  addToCart(product : any) {
    alert('product added to Cart ');
    this.cartService.addToCart(product);
    console.log(product);
  }


  addToWishList(product : any) {
    alert('Product Added to wishlist');
    this.wishListService.addToWishList(product);
  }
}
