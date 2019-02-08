import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';

@Component({
  selector: 'app-form-alta',  // <app-form-alta> Etiqueta </app-form-alta>
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {
  titulo : string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido : string;
  
  descripcionIntroducida : string;
  ficheroIntroducido : string;
  servPortfolios : PortfoliosService;

  constructor(sp : PortfoliosService) {
    this.servPortfolios = sp;
   }
// Método, correspondiente al evento "Al inicializar este Componente", es decir, recibe una llamada automática por parte del motor de Angular
  ngOnInit() {  
    this.titulo = "Alta de portolios";
    this.etiqueta_nombre = "Nombre";
    this.placeholder_nombre = "Introduzca Nombre y apellidos";
    this.nombreIntroducido = "El Innombrable";
  }
  limpiar() {
    this.nombreIntroducido = "";
    this.descripcionIntroducida = "";
    this.ficheroIntroducido = "";
    console.log("<<< Se supone que ha limpiado >>>");
  }
  darDeAlta() {
    // Lo justo para llamar al servicio
    this.servPortfolios.alta(this.nombreIntroducido, this.descripcionIntroducida, this.ficheroIntroducido);
    console.log("<<< Se supone que ha dado de alta >>>");
  }
}
