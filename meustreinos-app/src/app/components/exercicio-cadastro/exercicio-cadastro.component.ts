import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExercicioService } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicio-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-cadastro.component.html',
})
export class ExercicioCadastroComponent {
  form: FormGroup;
  selectedVideo: File | null = null;

  constructor(private fb: FormBuilder, private exercicioService: ExercicioService) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      series: ['', Validators.required],
      repeticoes: [''],
      descricao: [''],
      video: [null]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedVideo = file;
    }
  }

  salvar() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('nome', this.form.get('nome')?.value);
      formData.append('series', this.form.get('series')?.value);
      formData.append('repeticoes', this.form.get('repeticoes')?.value || '');
      formData.append('descricao', this.form.get('descricao')?.value || '');
      if (this.selectedVideo) {
        formData.append('video', this.selectedVideo);
      }

      this.exercicioService.criarExercicio(formData).subscribe({
        next: (res) => {
          console.log('Salvo com sucesso:', res);
          this.form.reset();
          this.selectedVideo = null;
        },
        error: (err) => {
          console.error('Erro ao salvar:', err);
        }
      });
    } else {
      console.warn('Formulário inválido!');
    }
  }
}
