import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';
import { ListWrapper } from '@angular/platform-browser/src/facade/collection';

@Injectable( )
export class PortfoliosService {
  lista : Array<Portfolio>;

  constructor() { 
    console.log("<<< CREANDO SERVICIO >>> ");
    this.lista = new Array<Portfolio>();
  }
  public alta(nombre : string, desc : string, fich : string) : void {
    let nuevoPortfolio : Portfolio;
    nuevoPortfolio = new Portfolio(nombre, desc, fich);
    this.lista.push( nuevoPortfolio );
    console.log("<<< ALTA PORTFOLIO: " + nombre + " >>>");
  }
  public baja(nombre : string) {  
    for(var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getNombre().toLowerCase() == nombre.toLowerCase()) {
        this.lista.splice(i, 1);
        console.log("<<< BAJA PORTFOLIO: " + nombre + " >>>"); 
        // Romper el bucle, para que no continue buscando 
        return; // break;
      }
    }
    console.log("<<< No ha encontrado " + nombre + " >>>"); 
  }
  public listar() : Array<Portfolio> {
    console.log("<<< LISTA PORTFOLIOs: " + this.lista.toString() + " >>>"); 
    return this.lista;
  }
}
