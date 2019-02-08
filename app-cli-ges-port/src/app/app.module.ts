import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormAltaComponent } from './form-alta/form-alta.component';
import { FormBajaComponent } from './form-baja/form-baja.component';
import { ListaComponent } from './lista/lista.component';
//TODO: Añadir o descomentar
import { PortfoliosService } from './portfolios.service';
// Como la aplicación es un módulo. Este es el módulo

@NgModule({
  declarations: [
    AppComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],  
  //TODO: Añadir o descomentar
  providers: [PortfoliosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
