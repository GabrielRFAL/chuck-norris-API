import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChuckApiService } from '../../services/chuck-api.service';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private chuckService = inject(ChuckApiService);
  private modalService = inject(NgbModal);

  piada: any = null;
  isLoading = false;
  errorMessage = '';

  gerarPiada(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.chuckService.getJoke().subscribe({
      next: (data) => {
        this.piada = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar piada:', err);
        this.errorMessage = 'Erro ao carregar piada.';
        this.isLoading = false;
      }
    });
  }

  openModal(): void {
    if (!this.piada) return;

    const modalRef = this.modalService.open(ModalHomeComponent, { centered: true });
    modalRef.componentInstance.valor = this.piada.value;
    modalRef.componentInstance.imagem = this.piada.icon_url;
  }
}
