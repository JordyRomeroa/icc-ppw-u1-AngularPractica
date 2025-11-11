import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'listado-proyecto',
  imports: [],
  templateUrl: './listado-proyecto.html',
  styleUrl: './listado-proyecto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyecto {
  listName = input.required<string>();
  proyectos = input.required<Proyecto[]>();
 }
