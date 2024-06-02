import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receta } from '../../interfaces/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css'
})

export class RecetaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private RecetaService: RecetaService) {
    this.form = this.fb.group({
     nombre: ["", Validators.required],
     descripcion: ["", Validators.required],
     tiempo: ["", Validators.required],
     porciones: ["", Validators.required]

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  addReceta() {
    console.log('Add Receta');
    console.log(this.form);

    const receta: Receta = {
      id: 0,
      nombre: this.form.value.nombre,
      descipcion: this.form.value.descipcion,
      tiempo: this.form.value.tiempo,
      porciones: this.form.value.porciones,
      usuario_id: 1
    };

    this.RecetaService.createReceta(receta).subscribe(response => {
      console.log('Receta agregada exitosamente:', response);
     }, error => {
      console.error('Error al agregar la Receta:', error);
    });

    console.log(receta);
  }
}
