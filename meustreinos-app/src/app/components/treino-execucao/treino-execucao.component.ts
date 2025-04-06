import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Exercicio} from '../../services/exercicio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-treino-execucao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './treino-execucao.component.html',
})
export class TreinoExecucaoComponent {
  exercicios: Exercicio[] = [
    {
      id: 1,
      nome: 'Supino Máquina',
      series: 3,
      repeticoes: 10,
      descricao: 'Exercício para peitoral',
      videoFileName: 'teste.mp4'
    },
    {
      id: 2,
      nome: 'Desenvolvimento Ombro',
      series: 2,
      repeticoes: 12,
      descricao: 'Ombro anterior',
      videoFileName: 'bike.mp4'
    }
  ];

  exercicioAtualIndex = 0;
  pesos: string[] = [];

  constructor(private http: HttpClient) {}

  get exercicioAtual(): Exercicio {
    return this.exercicios[this.exercicioAtualIndex];
  }

  ngOnInit() {
    this.pesos = Array(this.exercicioAtual.series).fill('');
  }

  getVideoUrl(): string {
    return `http://localhost:8080/videos/${this.exercicioAtual.videoFileName}?v=${this.exercicioAtual.id}`;
  }

  proximo() {
    if (this.exercicioAtualIndex < this.exercicios.length - 1) {
      this.exercicioAtualIndex++;
      this.pesos = Array(this.exercicioAtual.series).fill('');
    }
  }

  anterior() {
    if (this.exercicioAtualIndex > 0) {
      this.exercicioAtualIndex--;
      this.pesos = Array(this.exercicioAtual.series).fill('');
    }
  }

  finalizarTreino() {
    const treinoExecucao = {
      nome: 'Treino A', // futuramente pode deixar dinâmico
      execucoes: this.exercicios.map((exercicio, i) => ({
        exercicioId: exercicio.id,
        series: exercicio.series,
        pesosPorSerie: this.pesos[i] // pesos é um array de arrays
      }))
    };

    this.http.post('http://localhost:8080/api/treino-execucao', treinoExecucao)
      .subscribe({
        next: () => {
          console.log('Treino salvo com sucesso!');
          alert('Treino finalizado!');
        },
        error: (err) => {
          console.error('Erro ao salvar treino:', err);
          alert('Erro ao salvar o treino.');
        }
      });
  }

}
