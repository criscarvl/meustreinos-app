import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Treino} from './treino.service';

export interface FichaTreino {
  id: number;
  nome: string;
  treinos: Treino[];
}

@Injectable({
  providedIn: 'root'
})
export class FichaTreinoService {
  private apiUrl = 'http://localhost:8080/api/fichas'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  listar(): Observable<FichaTreino[]> {
    return this.http.get<FichaTreino[]>(this.apiUrl);
  }

  salvar(ficha: FichaTreino): Observable<FichaTreino> {
    return this.http.post<FichaTreino>(this.apiUrl, ficha);
  }
}
