import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css',
})
export class ConfirmOrderComponent {
  @Input() total: number = 0;
  @Output() confirmOrder = new EventEmitter<void>();
  ref: NgbModalRef | undefined = undefined;

  constructor(private modalService: NgbModal) {}

  openModal(modal: TemplateRef<any>) {
    this.ref = this.modalService.open(modal);
  }

  closeModal(): void {
    this.ref?.dismiss();
  }

  onConfirm(): void {
    this.confirmOrder.emit();
    this.closeModal();
  }
}
