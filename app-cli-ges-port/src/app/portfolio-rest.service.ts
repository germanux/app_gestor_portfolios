import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http'
import { Portfolio } from './portfolio';
import 'rsjs/add/operator/map';
import { port } from '_debugger';

function mapPortfolios(response: Response) : Portfolio[] {
  return response.json().result.map(toPortfolio);
}
function toPortfolio(r: any) : Portfolio {
  let portfolio = <Portfolio>{
    nombre: r.nombre,
    descripcion: r.descripcion,
    fichero: r.fichero
  };
  console.log(portfolio);
  return portfolio;
}

@Injectable()
export class PortfolioRestService {
  private baseUrl: string = 'http://localhost:9000/api';

  constructor(private http: Http) { }
  
  getAll():Observable<Portfolio[]> {
    let portfolios$ = this.http
    .get(`${this.baseUrl}/portfolios`, { headers: this.getHeaders()})
    .map(mapPortfolios);
    return portfolios$;
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', "application/json");
    return headers;
  }

}
