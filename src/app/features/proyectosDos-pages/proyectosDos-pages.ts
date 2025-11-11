import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosServiceTs } from './services/proyectos-service';
import { ListadoProyecto } from "../proyectos-pages/components/listado-proyecto/listado-proyecto";
import { AddProyectoComponent } from '../proyectos-pages/components/Add-proyecto/Add-proyecto'; // <-- nombre correcto

@Component({
  selector: 'proyectos-dos-pages',
  standalone: true,
  imports: [ListadoProyecto, AddProyectoComponent], // <-- usar el component correcto
  templateUrl: './proyectosDos-pages.html',
  styleUrls: ['./proyectosDos-pages.css'], // <-- corregido S y array
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPages {
  ProyectosService = inject(ProyectosServiceTs);
}
