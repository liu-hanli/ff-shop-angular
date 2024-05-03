import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../data/typing';
import { CommonModule } from '@angular/common';
import { slideUpDown } from '../animation';

@Component({
  selector: 'app-shop-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css',
  animations: [slideUpDown],
})
export class ShopProductComponent {
  @Input() product!: Product;
  @Input() available: boolean = true;
  @Input() displayed: boolean = true;
  @Output() addToCart = new EventEmitter<number>();

  constructor() {}

  onAddToCart(): void {
    if (this.product) {
      this.addToCart.emit(this.product.id);
    }
  }
}
