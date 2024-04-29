import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class RegistroUsuarioComponent {
  usuarioForm: FormGroup;
  condicionesCumplidas: boolean[] = [false, false, false];
  condiciones: string[] = [
    'La contraseña debe tener al menos una mayúscula.',
    'La contraseña debe tener al menos dos números no consecutivos.',
    'La contraseña no debe tener más de 5 caracteres.'
  ];

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=(?:.*\d.*\d))(?!.*\d{3,}).{1,5}$/)
        ]
      ]
    });
  }

  get nombreUsuario() { return this.usuarioForm.get('nombreUsuario'); }
  get contrasena() { return this.usuarioForm.get('contrasena'); }

  validarContrasena(): void {
    const contrasena = this.contrasena!.value;
    this.condicionesCumplidas[0] = /[A-Z]/.test(contrasena);
    this.condicionesCumplidas[1] = /(?=.*\d.*\d)(?!\d{3,})/.test(contrasena);
    this.condicionesCumplidas[2] = contrasena.length <= 5;
  }

  registrarUsuario(): void {
    if (this.usuarioForm.valid && this.condicionesCumplidas.every(condicion => condicion)) {
      alert('¡Bienvenido!');
    }
  }

  getErrorMessages(): string[] {
    return Object.keys(this.usuarioForm.get('contrasena')!.errors || {})
      .map(key => {
        switch (key) {
          case 'required':
            return 'La contraseña es requerida';
          case 'pattern':
            return 'La contraseña debe tener al menos una mayúscula, dos números no consecutivos y no más de 5 caracteres';
          default:
            return '';
        }
      });
  }
}
