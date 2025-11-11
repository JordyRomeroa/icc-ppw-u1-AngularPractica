import { Injectable, signal } from '@angular/core';
import { Proyecto } from '../../proyectos-pages/proyectos-pages';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceTs {

  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A', descripcion: 'Descripcion' }
  ]);

  constructor() {}

  AddProyecto(newproyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newproyecto]);
  }
}
