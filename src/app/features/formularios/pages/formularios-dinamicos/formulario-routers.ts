import { Component } from "@angular/core";
import { FormularioPage } from "../../../Formulario-pages/Formulario-pages";
import { FormulariosDinamicos } from "./formularios-dinamicos";

export const forumularioPagesRoutes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formulario Básico',
        Component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formulario Dinámico',
        Component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'more',
        Component: FormularioPage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
