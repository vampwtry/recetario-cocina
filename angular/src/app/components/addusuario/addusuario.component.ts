import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class RegistroUsuarioComponent {
  usuarioForm: FormGroup;
  condicionesCumplidas: boolean[] = [false, false];
  condiciones: string[] = [
    'El nombre de usuario debe ser un correo.',
    'La contraseña debe tener mínimo 8 caracteres y máximo 50.'
  ];

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.email]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]
      ]
    });
  }

  get nombreUsuario() { return this.usuarioForm.get('nombreUsuario'); }
  get contrasena() { return this.usuarioForm.get('contrasena'); }

  registrarUsuario(): void {
    if (this.usuarioForm.valid) {
      alert('¡Bienvenido!');
    }
  }

  getErrorMessages(): string[] {
    return Object.keys(this.usuarioForm.get('contrasena')!.errors || {})
      .map(key => {
        switch (key) {
          case 'required':
            return 'La contraseña es requerida';
          case 'minlength':
            return 'La contraseña debe tener mínimo 8 caracteres';
          case 'maxlength':
            return 'La contraseña debe tener máximo 50 caracteres';
          default:
            return '';
        }
      });
  }
}
