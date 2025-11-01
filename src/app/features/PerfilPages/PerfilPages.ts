import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-perfil-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './PerfilPages.html',
  styleUrls: ['./PerfilPages.css']
})

export class PerfilPages{
 name = signal('Jordy');
 lastname = signal('Romero');
 age =signal<number>(22);

 private readonly initial = { name: 'Jordy', lastname: 'Romero', age: 22 };

 getfullName(): string{
  return `${this.name()} ${this.lastname()} con edad de ${this.age() } años`;
 }
 changeData(): void{
  this.name.set('María');
  this.lastname.set('González');
  this.age.set(25);
 }
  resetData(): void{
    this.name.set(this.initial.name);
    this.lastname.set(this.initial.lastname);
    this.age.set(this.initial.age);
  }
  changeAge(): void{
    this.age.set(18);
  }
}
