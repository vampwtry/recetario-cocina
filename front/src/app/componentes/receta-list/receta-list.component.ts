import { Component } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../interfaces/receta';


@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrl: './receta-list.component.css'
})
export class RecetaListComponent {

  recetas: Receta[] = [];

  constructor(private recetaService: RecetaService) {}

  ngOnInit(): void {
    this.recetaService.getRecetas().subscribe((data: Receta[]) => {
      this.recetas = data;
    });
  }
}
