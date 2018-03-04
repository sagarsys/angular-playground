import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {

  private products: ProductModel[] =
    [
      {
        title: 'Product 1',
        favorite: false
      },
      {
        title: 'Product 2',
        favorite: false
      },
      {
        title: 'Product 3',
        favorite: true
      },
      {
        title: 'Product 4',
        favorite: false
      }
    ];
  
  constructor() {}

  get(): ProductModel[] {
    return this.products;
  }
  
  set(products: ProductModel[]) {
    this.products = products;
    console.log(this.products);
  }
  
  add(product: ProductModel) {
    this.products.push(product);
  }
  
}
