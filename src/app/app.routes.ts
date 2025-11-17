import { Routes } from '@angular/router';
import { HomePages } from './features/HomePages/HomePages';
import { PerfilPages } from './features/PerfilPages/PerfilPages';
import { ProyectosPages } from './features/proyectos-pages/proyectos-pages';
import { ProyectosDosPages } from './features/proyectosDos-pages/proyectosDos-pages';
import { FormularioPage } from './features/Formulario-pages/Formulario-pages';
import { FormulariosDinamicos } from './features/formularios/pages/formularios-dinamicos/formularios-dinamicos';
import { FormularioMore } from './features/formularios/pages/formulario-more/formulario-more';


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
  {
    path: 'Formulario/basic',
    component: FormularioPage,
    title: 'Formulario',
  },
  {
    path: 'Formulario/dynamic',
    component: FormulariosDinamicos,
    title: 'Formulario Dinámico',
  },
  {
    path: 'Formulario/more',
    component: FormularioMore,
    title: 'Formulario More',
  },
  {
  path: 'formulario',
  loadChildren: () =>
  import('./features/formularios/pages/formularios-dinamicos/formulario-routers').then(m => m.forumularioPagesRoutes)
  },

  // EL WILDCARD SIEMPRE AL FINAL
  {
    path: '**',
    redirectTo: '',
  },
];
