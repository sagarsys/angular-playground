import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { ProductModel } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @ViewChild('newProductForm') form: ElementRef;
  products: ProductModel[];
  productTitle: string = null;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.get();
  }
  
  onFormSubmit($event: Event) {
    $event.preventDefault();
    if (this.productTitle) {
      const product: ProductModel = {
        title: this.productTitle,
        favorite: false
      };
      this.productsService.add(product);
      this.productTitle = null;
    }
  }
  
  onFavoriteClick(isFavorite: boolean, index: number) {
    this.products[index].favorite = isFavorite;
    this.productsService.set(this.products);
  }
  
}
