import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  private products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  
  constructor() { }

  get(): string[] {
    return this.products;
  }
  
  add(product: string) {
    this.products.push(product);
  }
  
}
