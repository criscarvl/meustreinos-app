import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaTreinoService, FichaTreino } from '../../services/ficha-treino.service';

@Component({
  selector: 'app-ficha-treino-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-treino-lista.component.html',
})
export class FichaTreinoListaComponent implements OnInit {
  fichas: FichaTreino[] = [];

  constructor(private fichaService: FichaTreinoService) {}

  ngOnInit(): void {
    this.fichaService.listar().subscribe({
      next: (res) => this.fichas = res,
      error: (err) => console.error('Erro ao buscar fichas:', err)
    });
  }
}
