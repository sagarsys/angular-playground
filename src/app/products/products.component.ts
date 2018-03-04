import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @ViewChild('newProductForm') form: ElementRef;
  products: string[];
  newProduct = '';
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.get();
  }
  
  onFormSubmit($event: Event) {
    $event.preventDefault();
    if (this.newProduct.length) {
      this.productsService.add(this.newProduct);
      this.newProduct = '';
    }
  }
}
