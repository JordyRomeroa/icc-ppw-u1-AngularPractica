import { Routes } from '@angular/router';
import { HomePages } from './features/HomePages/HomePages';
import { PerfilPages } from './features/PerfilPages/PerfilPages';
import { ProyectosPages } from './features/proyectos-pages/proyectos-pages';
import { ProyectosDosPages } from './features/proyectosDos-pages/proyectosDos-pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePages,
    title: 'Home',
  },
  {
    path: 'page',
    component: PerfilPages,
    title: 'Perfil',
  },
  {
    path: 'proyectos',
    component: ProyectosPages,
    title: 'Proyectos',
  },
  {
    path: 'proyectoDos',
    component: ProyectosDosPages,
    title: 'Proyectos Dos',
  },
  // EL WILDCARD SIEMPRE AL FINAL
  {
    path: '**',
    redirectTo: '',
  },
];
