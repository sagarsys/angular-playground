import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  get(): string[] {
    return ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  }
  
}
