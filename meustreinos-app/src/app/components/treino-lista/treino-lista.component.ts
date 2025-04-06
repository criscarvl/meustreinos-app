import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoService, Treino } from '../../services/treino.service';

@Component({
  selector: 'app-treino-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treino-lista.component.html',
})
export class TreinoListaComponent implements OnInit {
  treinos: Treino[] = [];

  constructor(private treinoService: TreinoService) {}

  ngOnInit(): void {
    this.treinoService.listar().subscribe({
      next: (dados) => this.treinos = dados,
      error: (err) => console.error('Erro ao carregar treinos', err)
    });
  }
}
