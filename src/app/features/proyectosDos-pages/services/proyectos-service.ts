import { effect, Injectable, signal } from '@angular/core';
import { Proyecto } from '../../proyectos-pages/proyectos-pages';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceTs {

  constructor() {

    effect(() => {
      const data = this.Proyecto();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });

  }

  private readonly STORAGE_KEY = 'ProyectosApp';
  Proyecto= signal<Proyecto[]>(this.loadProyectos());

  //proyectos = signal<Proyecto[]>([
  // { id: 1, nombre: 'Proyecto A', descripcion: 'Descripcion' }
  //]);

  private loadProyectos(): Proyecto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [
      { id: 1, nombre: 'Proyecto A',
        descripcion: 'Descripcion' }
    ];

  }



  AddProyecto(newproyecto: Proyecto) {
    this.Proyecto.set([...this.Proyecto(), newproyecto]);
  }
  dellFirstProyecto() {
    this.Proyecto.set(this.Proyecto().slice(1));
  }
}
