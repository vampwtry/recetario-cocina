import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Receta } from '../interfaces/receta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-receta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-receta.component.html',
  styleUrl: './crear-receta.component.css'
})
  export class CrearRecetaComponent implements OnInit{
   form: FormGroup;

    constructor(fb: FormBuilder){
    this.form = fb.group({
      Nombre: ["", Validators.required],
     Descripcion: [""]
    });
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    addReceta(){
      console.log('Add Receta');

      console.log(this.form);

    const receta: Receta = {
       Nombre: this.form.get('Nombre')?.value,
       Descripcion: this.form.value.Descripcion
     }

    console.log(receta);
    }
}
