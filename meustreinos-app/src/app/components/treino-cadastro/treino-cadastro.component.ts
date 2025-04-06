import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreinoService } from '../../services/treino.service';
import { ExercicioService, Exercicio } from '../../services/exercicio.service';

@Component({
  selector: 'app-treino-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './treino-cadastro.component.html',
})
export class TreinoCadastroComponent implements OnInit {
  form: FormGroup;
  exerciciosDisponiveis: Exercicio[] = [];

  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService,
    private exercicioService: ExercicioService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      subdescricao: [''],
      exercicios: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.exercicioService.listar().subscribe({
      next: (res) => this.exerciciosDisponiveis = res,
      error: (err) => console.error('Erro ao buscar exercícios', err)
    });
  }

  get exercicios() {
    return this.form.get('exercicios') as FormArray;
  }

  adicionarExercicio(exercicioId: number) {
    const ordem = this.exercicios.length + 1;
    this.exercicios.push(this.fb.group({
      exercicioId: [exercicioId],
      ordem: [ordem]
    }));
  }

  salvar() {
    this.treinoService.salvar(this.form.value).subscribe({
      next: (res) => console.log('Treino salvo com sucesso', res),
      error: (err) => console.error('Erro ao salvar treino', err)
    });
  }
}
