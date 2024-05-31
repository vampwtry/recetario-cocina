import { Routes } from '@angular/router';
//import { RegistroUsuarioComponent } from './components/addusuario/addusuario.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { CrearRecetaComponent } from './components/crear-receta/crear-receta.component';
import { AgregarTyPComponent } from './components/agregar-ty-p/agregar-ty-p.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { CCMIComponent } from './components/ccmi/ccmi.component';
import { RecetaIndividualComponent } from './components/receta.individual/receta.individual.component';
import { EditarComponent } from './components/editar/editar.component';
import { EditarTyPComponent } from './components/editar-ty-p/editar-ty-p.component';
import { EditarComponentesComponent } from './components/editar-componentes/editar-componentes.component';
import { EditarPasosComponent } from './components/editar-pasos/editar-pasos.component';


export const routes: Routes = [
//    {path: 'Registrar', component: RegistroUsuarioComponent },
    {path: 'plantilla', component: PlantillaComponent },
    {path: 'CrearReceta', component: CrearRecetaComponent },
    {path: 'AgregarTyP', component: AgregarTyPComponent },
    {path: 'Componentes', component: ComponentesComponent },
    {path: 'Pasos', component: PasosComponent },
    {path: 'CCMI', component: CCMIComponent },
    {path: 'RecetaIndividual', component: RecetaIndividualComponent },
    {path: 'Editar', component: EditarComponent },
    {path: 'EditarTyP', component: EditarTyPComponent },
    {path: 'EditarComponentes', component: EditarComponentesComponent },
    {path: 'EditarPasos', component: EditarPasosComponent },
    {path:"**", redirectTo:"/plantilla", pathMatch:'full'}
];
