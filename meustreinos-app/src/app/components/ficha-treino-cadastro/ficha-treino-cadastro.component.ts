import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FichaTreino, FichaTreinoService} from '../../services/ficha-treino.service';
import { TreinoService, Treino } from '../../services/treino.service';

@Component({
  selector: 'app-ficha-treino-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ficha-treino-cadastro.component.html',
})
export class FichaTreinoCadastroComponent implements OnInit {
  form: FormGroup;
  treinos: Treino[] = [];

  constructor(
    private fb: FormBuilder,
    private fichaService: FichaTreinoService,
    private treinoService: TreinoService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      treinos: [[]]
    });
  }

  ngOnInit(): void {
    this.treinoService.listar().subscribe(t => this.treinos = t);
  }

  salvar() {
    const valores = this.form.value;

    const fichaParaEnviar = {
      nome: valores.nome,
      treinos: valores.treinos.map((id: number) => ({ id }))
    };

    this.fichaService.salvar(fichaParaEnviar as FichaTreino).subscribe({
      next: res => console.log('Salvo com sucesso', res),
      error: err => console.error('Erro ao salvar', err)
    });
  }

  toggleTreino(id: number) {
    const selecionados = this.form.value.treinos as number[];
    const atualizados = selecionados.includes(id)
      ? selecionados.filter(t => t !== id)
      : [...selecionados, id];

    this.form.patchValue({ treinos: atualizados });
  }

  isSelecionado(id: number): boolean {
    return this.form.value.treinos.includes(id);
  }
}
