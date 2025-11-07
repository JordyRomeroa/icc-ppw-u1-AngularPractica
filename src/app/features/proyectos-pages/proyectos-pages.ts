import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyectos-pages',
  imports: [],
  template: `<p>proyectos-pages works!</p>`,
  styleUrl: './proyectos-pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPages {

name=signal('');
description=signal('');

proyectos =signal<Proyecto[]>([
  {
    id: 1, nombre: 'Proyecto A ',
    descripcion: 'Descripcion '}
  ]);

changeName(value: string){
  this.name.set (value);}

changeDescription(value: string){
  this.description.set (value);}

}
