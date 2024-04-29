import { Component } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-receta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-receta.component.html',
  styleUrl: './crear-receta.component.css'
})
  export class CrearRecetaComponent{

}
