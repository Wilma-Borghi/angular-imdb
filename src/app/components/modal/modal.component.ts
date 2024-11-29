import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @ViewChild('modal') modalElement!: ElementRef;

  title: string = 'Título da Modal';

  show(): void {
    const modal = new Modal(this.modalElement.nativeElement);
    modal.show();
  }
}
