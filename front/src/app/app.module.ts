import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaComponent } from './componentes/receta/receta.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { IngredienteComponent } from './componentes/ingrediente/ingrediente.component';
import { MedidaComponent } from './componentes/medida/medida.component';
import { PasoComponent } from './componentes/paso/paso.component';
import { RecetaListComponent } from './componentes/receta-list/receta-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    UsuarioComponent,
    IngredienteComponent,
    MedidaComponent,
    PasoComponent,
    RecetaListComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
