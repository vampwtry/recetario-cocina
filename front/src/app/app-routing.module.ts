import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './componentes/receta/receta.component';

const routes: Routes = [
 {path:"Receta", component: RecetaComponent},
 {path:"**", redirectTo:"Receta", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
