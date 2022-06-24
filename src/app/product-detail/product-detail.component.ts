import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../productServices/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productData : any = [];
  constructor(
    private apiService : ApiService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getProductById(this.router.snapshot.params['id'])
    .subscribe((resp)=> {
     this.productData = resp; 
      console.log(resp);
    });
  }

}
