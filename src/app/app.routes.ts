import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SobreComponent } from './pages/sobre/sobre';
import { ProjetosSociaisComponent } from './pages/projetos-sociais/projetos-sociais';
import { ServicoDetalheComponent } from './pages/servico-detalhe/servico-detalhe';
import { Solucoes } from './pages/solucoes/solucoes';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'projetos-sociais',
    component: ProjetosSociaisComponent
  },

  {
    path: 'servico/:id',
    component: ServicoDetalheComponent
  },

  {
    path: 'solucoes',
    component: Solucoes
  }

];