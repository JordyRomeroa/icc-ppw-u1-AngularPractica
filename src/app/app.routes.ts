import { Routes } from '@angular/router';
import { HomePages } from './features/HomePages/HomePages';
import { PerfilPages } from './features/PerfilPages/PerfilPages';

export const routes: Routes = [
  {
    path: '',
    component: HomePages,
    title: 'Home'
  },
  {
    path: 'page',
    component: PerfilPages,
    title: 'Perfil'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
