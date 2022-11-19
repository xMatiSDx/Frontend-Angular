import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClientModule) { }

  getInfo() {
    console.log('Obteniendo datos')
  }
}
