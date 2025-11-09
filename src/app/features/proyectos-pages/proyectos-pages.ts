import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos-pages',
  imports: [],
  templateUrl: './proyectos-pages.html',
  styleUrl: './proyectos-pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPages {

  name = signal('');
  description = signal('');

  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A', descripcion: 'Descripcion' }
  ]);

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }

  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      nombre: this.name(),
      descripcion: this.description()
    };

    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.description.set('');
  }
}
