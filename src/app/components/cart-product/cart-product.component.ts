import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../data/typing';
import { CommonModule } from '@angular/common';
import { slideUpDown } from '../animation';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css',
  animations: [slideUpDown],
})
export class CartProductComponent {
  @Input() product!: Product;
  @Output() removeFromCart = new EventEmitter<number>();

  constructor() {}

  onRemoveFromCart(): void {
    if (this.product) {
      this.removeFromCart.emit(this.product.id);
    }
  }
}
