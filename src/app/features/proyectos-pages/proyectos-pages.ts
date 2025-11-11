import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyecto } from './components/listado-proyecto/listado-proyecto';

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos-pages',
  imports: [ListadoProyecto],
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
  dellFirstProyecto() {
    this.proyectos.set(this.proyectos().slice(1));
  }

}
