import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './shared/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
