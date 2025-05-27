import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChuckApiService } from '../../services/chuck-api.service';

@Component({
  selector: 'app-modal-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent {
  @Input() valor = '';
  @Input() imagem = '';

  isLoading = false;
  errorMessage = '';

  constructor(
    private modalService: NgbModal,
    private chuckService: ChuckApiService
  ) {}

  closeModal(): void {
    this.modalService.dismissAll();
  }

  carregarOutraPiada(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.chuckService.getJoke().subscribe({
      next: (data) => {
        this.valor = data.value;
        this.imagem = data.icon_url;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar nova piada:', err);
        this.errorMessage = 'Erro ao carregar nova piada.';
        this.isLoading = false;
      }
    });
  }
}
