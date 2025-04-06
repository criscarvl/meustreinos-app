import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioService, Exercicio } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicio-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-lista.component.html',
})
export class ExercicioListaComponent implements OnInit {
  exercicios: Exercicio[] = [];

  constructor(private exercicioService: ExercicioService) {}

  ngOnInit() {
    this.exercicioService.listar().subscribe({
      next: (res) => (this.exercicios = res),
      error: (err) => console.error('Erro ao buscar exercícios:', err),
    });
  }
}
