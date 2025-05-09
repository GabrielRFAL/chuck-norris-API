import { Component, inject } from '@angular/core';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [ModalHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private modalService = inject(NgbModal);

  openModal():void {
    const modalRef = this.modalService.open(ModalHomeComponent);
    modalRef.componentInstance.valor = 'value';
    modalRef.componentInstance.imagem = 'https://api.chucknorris.io/img/avatar/chuck-norris.png';


  }

}
