import { Component, OnInit } from '@angular/core';
import {PortfoliosService} from 'app/portfolios.service'

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css'],
  // Proveer servicio  
  //TODO: Quitar o comentar
  //providers: [PortfoliosService]
})
export class FormBajaComponent implements OnInit {
  nombreIntroducido : string;
  constructor(private servPortfolios : PortfoliosService) { }

  ngOnInit() {
  }
  darDeBaja() : void {
    console.log("Baja: " + this.nombreIntroducido);

    this.servPortfolios.baja(this.nombreIntroducido);
  }
}
