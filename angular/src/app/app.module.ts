import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { usuarioService } from './services/user.service'; //  servicio de usuario


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegistroUsuarioComponent } from './components/addusuario/addusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [usuarioService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
