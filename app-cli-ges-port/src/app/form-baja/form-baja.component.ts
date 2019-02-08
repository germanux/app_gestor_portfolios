import { Component, OnInit } from '@angular/core';
import {PortfoliosService} from 'app/portfolios.service'
import { Portfolio } from 'app/portfolio';

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
})
export class FormBajaComponent implements OnInit {
  nombreIntroducido : string;
  private arrayPortfolios : Array<Portfolio>;

  constructor(private servPortfolios : PortfoliosService) { }
  ngOnInit() {
    this.arrayPortfolios = this.servPortfolios.listar();
  }
  darDeBaja() : void {
    console.log("Baja: " + this.nombreIntroducido);
    this.servPortfolios.baja(this.nombreIntroducido);
  }
  cambiarCampoForm(nombre : string) : void {
    alert(nombre);
  }
}
