import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Exercicio {
  id?: number;
  nome: string;
  series: number;
  repeticoes: number;
  descricao: string;
  videoFileName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {
  private readonly API = 'http://localhost:8080/api/exercicios';

  constructor(private http: HttpClient) {}

  criarExercicio(formData: FormData): Observable<Exercicio> {
    return this.http.post<Exercicio>(this.API, formData);
  }

  listar(): Observable<Exercicio[]> {
    return this.http.get<Exercicio[]>(this.API);
  }
}
