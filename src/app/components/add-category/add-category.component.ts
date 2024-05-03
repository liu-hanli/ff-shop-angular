import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  @Output() addCategory: EventEmitter<string> = new EventEmitter<string>();

  categoryName: string = '';
  ref: NgbModalRef | undefined = undefined;

  constructor(private modalService: NgbModal) {}

  openModal(modal: TemplateRef<any>) {
    this.ref = this.modalService.open(modal);
  }

  closeModal() {
    this.ref?.dismiss();
  }

  submitForm() {
    this.addCategory.emit(this.categoryName);
    this.categoryName = '';
    this.closeModal();
  }
}
