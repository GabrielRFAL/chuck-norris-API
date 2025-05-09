import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-home',
  imports: [],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent {

  private modalService = inject(NgbModal);
  valor = '';
  imagem = '';

  closeModal():void {
    this.modalService.dismissAll()
  }

  ngOnInit(){
    console.warn("valor recebido ==> ", this.valor)
    console.warn("valor recebido ==> ", this.imagem)
  }

}
