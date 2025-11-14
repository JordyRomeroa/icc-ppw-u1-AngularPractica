import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-pages',
  imports: [ReactiveFormsModule],
  templateUrl: './Formulario-pages.html',
  styleUrl: './Formulario-pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPages {

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['', [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {

  if (this.myForm.valid) {
    this.myForm.markAllAsTouched();
    return;
  }
  console.log('Datos del formulario:', this.myForm.value);
  alert('Formulario enviado con éxito!');
  this.myForm.reset();
  }

  isValidField(fieldName: string): boolean | null {
    return (
      this.myForm.controls[fieldName].errors &&
      this.myForm.controls[fieldName].touched
    );
  }

  getFieldError(fieldName: string): string | null {
    const field = this.myForm.controls[fieldName];
    if (!field) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio.';

        case 'minlength':
          return `El mínimo de caracteres es ${errors['minlength'].requiredLength}.`;

        case 'min':
          return `El valor mínimo permitido es ${errors['min'].min}.`;

        case 'email':
          return 'El formato de correo es inválido.';
      }
    }

    return null; // ← Importante para evitar errores
  }
}
