import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]

})
export class AppModule { }
