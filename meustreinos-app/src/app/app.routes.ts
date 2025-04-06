import { Routes } from '@angular/router';
import { ExercicioCadastroComponent } from './components/exercicio-cadastro/exercicio-cadastro.component';
import { ExercicioListaComponent } from './components/exercicio-lista/exercicio-lista.component';
import { TreinoListaComponent } from './components/treino-lista/treino-lista.component';
import { TreinoCadastroComponent } from './components/treino-cadastro/treino-cadastro.component';
import { FichaTreinoCadastroComponent } from './components/ficha-treino-cadastro/ficha-treino-cadastro.component';
import { FichaTreinoListaComponent } from './components/ficha-treino-lista/ficha-treino-lista.component';
import { TreinoExecucaoComponent } from './components/treino-execucao/treino-execucao.component';

export const routes: Routes = [
  { path: 'exercicios/lista', component: ExercicioListaComponent },
  { path: 'exercicios/cadastro', component: ExercicioCadastroComponent },
  { path: '', redirectTo: 'exercicios/lista', pathMatch: 'full' },
  { path: 'treinos/lista', component: TreinoListaComponent },
  { path: 'treinos/cadastro', component: TreinoCadastroComponent },
  { path: 'fichas/cadastro', component: FichaTreinoCadastroComponent },
  { path: 'fichas/lista', component: FichaTreinoListaComponent },
  { path: 'treino/execucao', component: TreinoExecucaoComponent }
];
