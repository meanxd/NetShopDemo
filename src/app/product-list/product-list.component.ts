import { Component } from '@angular/core';
import { PRODUCTS } from './mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productslist = PRODUCTS;
}
