import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-addusuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      nombre: ["", Validators.required],
      contraseña: ["", Validators.required],
      
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addUser(){
    console.log('Agregar usuario');

    console.log(this.form);

    const usuario: usuario ={
      id:0,
      nombre: this.form.value.nombre,
      contrasena: this.form.get('contraseña')?.value,
    
    }

   
    console.log(usuario);
  }
  
}
