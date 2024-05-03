import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, CategoryFilterEmit } from '../../data/typing';

@Component({
  selector: 'app-category-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './category-checkbox.component.html',
  styleUrl: './category-checkbox.component.css',
})
export class CategoryCheckboxComponent {
  @Input() category: Category = '';
  @Output() setFilter = new EventEmitter<CategoryFilterEmit>();

  isChecked: boolean = true;

  constructor() {}

  onChange() {
    this.isChecked = !this.isChecked;
    this.setFilter.emit({ category: this.category, isChecked: this.isChecked });
  }
}
