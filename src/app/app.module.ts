import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './shared/services/products.service';
import { AutoGrowDirective } from './shared/directives/auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
