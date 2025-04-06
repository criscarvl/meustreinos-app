import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercicio } from './exercicio.service';

export interface TreinoExercicio {
  exercicioId: number;
  ordem: number;
}

export interface Treino {
  id?: number;
  nome: string;
  subdescricao: string;
  exercicios: TreinoExercicio[];
}

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private apiUrl = 'http://localhost:8080/api/treinos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Treino[]> {
    return this.http.get<Treino[]>(this.apiUrl);
  }

  salvar(treino: Treino): Observable<Treino> {
    return this.http.post<Treino>(this.apiUrl, treino);
  }
}
