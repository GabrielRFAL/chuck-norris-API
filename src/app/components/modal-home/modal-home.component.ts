import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChuckApiService } from '../../services/chuck-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})

export class ModalHomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private chuckService: ChuckApiService
  ) {}

  valor = '';
  imagem = '';
  piada = '';
  isLoading = false;
  errorMessage = '';

  closeModal(): void {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    console.warn("valor recebido ==> ", this.valor);
    console.warn("valor recebido ==> ", this.imagem);

    this.fetchJoke();
  }

  fetchJoke(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.chuckService.getJoke().subscribe({
      next: (data) => {
        this.piada = data.value;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar piada:', err);
        this.errorMessage = 'Erro ao carregar piada.';
        this.isLoading = false;
      }
    });
  }
}
