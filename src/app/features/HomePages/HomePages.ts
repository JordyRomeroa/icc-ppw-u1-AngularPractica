import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './HomePages.html',
  styleUrls: ['./HomePages.css']
})

export class HomePages
{
  title = 'Primer Componente';
  subtitle = 'Mi primera Practica';

  contador = 7;

  incrementar(): void
  {
    this.contador++;
  }

  decrementar(): void
  {
    this.contador--;
  }

  reset(): void
  {
    this.contador = 0;
  }
}
