import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormUtil } from '../../util/form-util/form-util';

@Component({
  selector: 'app-formulario-pages',
  imports: [ReactiveFormsModule],
  templateUrl: './Formulario-pages.html',
  styleUrl: './Formulario-pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {

  formUtils = FormUtil;


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario:', this.myForm.value);
    alert('Formulario válido. Datos enviados correctamente.');
    this.myForm.reset();
  }

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });
}
