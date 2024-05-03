import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import {
  Category,
  CategoryFilter,
  CategoryFilterEmit,
  Product,
} from './data/typing';
import {
  INITIAL_CATEGORIES,
  INITIAL_FILTER,
  INITIAL_PRODUCTS,
} from './data/memory';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { CommonModule } from '@angular/common';
import { ShopProductComponent } from './components/shop-product/shop-product.component';
import { CartProductComponent } from "./components/cart-product/cart-product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        CommonModule,
        AddCategoryComponent,
        AddProductComponent,
        ConfirmOrderComponent,
        CategoryCheckboxComponent,
        ShopProductComponent,
        CartProductComponent
    ]
})
export class AppComponent {
  title = 'ff-shop-angular';
  categories: Category[] = INITIAL_CATEGORIES;
  products: Product[] = INITIAL_PRODUCTS;
  categoryFilter: CategoryFilter = INITIAL_FILTER;
  total: number = 0;

  addCategory(category: Category): void {
    if (this.categories.includes(category)) {
      alert('Category already exists');
    } else {
      this.categories.push(category);
      this.categoryFilter[category] = true;
    }
  }

  addProductToShop(product: Product): void {
    this.products.push(product);
  }

  updateCategoryFilter({ category, isChecked }: CategoryFilterEmit): void {
    this.categoryFilter[category] = isChecked;
  }

  calculateTotal(): void {
    this.total = this.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  addProductToCart(productID: number): void {
    const product = this.products.find((product) => product.id === productID);
    if (product) {
      product.quantity++;
      this.calculateTotal();
    }
  }

  rmProductFromCart(productID: number): void {
    const product = this.products.find((product) => product.id === productID);
    if (product && product.quantity > 0) {
      product.quantity--;
      this.calculateTotal();
    }
  }

  confirmOrder(_: void): void {
    this.products.forEach((product) => {
      product.stock -= product.quantity;
      product.quantity = 0;
    });
    this.calculateTotal();
  }
}
