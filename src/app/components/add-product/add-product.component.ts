import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../data/typing';
import { CommonModule } from '@angular/common';
import { nextProductID } from '../../data/memory';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  @Input() categories: string[] = [];
  @Output() addProduct = new EventEmitter<Product>();

  productName: string = '';
  productDescription: string = '';
  productCategory: string = '';
  productImage: string = 'assets/images/Empty.png';
  productPrice: number = 0;
  productStock: number = 0;

  ref: NgbModalRef | undefined = undefined;

  constructor(private modalService: NgbModal) {}

  openModal(modal: TemplateRef<any>) {
    this.ref = this.modalService.open(modal);
  }

  closeModal() {
    this.ref?.dismiss();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.productImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submitForm() {
    this.addProduct.emit({
      id: nextProductID(),
      name: this.productName,
      description: this.productDescription,
      category: this.productCategory,
      image: this.productImage,
      price: this.productPrice,
      stock: this.productStock,
      quantity: 0,
    });

    this.productName = '';
    this.productDescription = '';
    this.productCategory = '';
    this.productImage = 'assets/images/Empty.png';
    this.productPrice = 0;
    this.productStock = 0;

    this.closeModal();
  }
}
