import { Routes } from '@angular/router';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { AgregarTyPComponent } from './agregar-ty-p/agregar-ty-p.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { PasosComponent } from './pasos/pasos.component';
import { CCMIComponent } from './ccmi/ccmi.component';
import { RecetaIndividualComponent } from './receta.individual/receta.individual.component';
import { EditarComponent } from './editar/editar.component';


export const routes: Routes = [
    {path: 'plantilla', component: PlantillaComponent },
    {path: 'CrearReceta', component: CrearRecetaComponent },
    {path: 'AgregarTyP', component: AgregarTyPComponent },
    {path: 'Componentes', component: ComponentesComponent },
    {path: 'Pasos', component: PasosComponent },
    {path: 'CCMI', component: CCMIComponent },
    {path: 'RecetaIndividual', component: RecetaIndividualComponent },
    {path: 'Editar', component: EditarComponent },
    {path: '', redirectTo: '/plantilla', pathMatch: 'full'}
];
