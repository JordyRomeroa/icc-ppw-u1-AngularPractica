import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Proyecto } from '../../proyectos-pages';

@Component({
  selector: 'app-add-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './Add-proyectos.html',
  styleUrls: ['./Add-proyecto.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyectoComponent {
dellFistProyecto() {
throw new Error('Method not implemented.');
}
  name = signal('');
  description = signal('');

  // output
  newProyecto = output<Proyecto>();
  removeProyecto = output<number>();

  eliminar(id:number) {
    this.removeProyecto.emit(id);
  }
  AddProyecto() {
    const proyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description()
    };

    this.newProyecto.emit(proyecto);


    this.name.set('');
    this.description.set('');
  }

  ChangeName(value: string) {
    this.name.set(value);
  }

  ChangeDescription(value: string) {
    this.description.set(value);
  }
  dellFirstProyecto(id:number) {
    this.removeProyecto.emit(1);
  }
}
