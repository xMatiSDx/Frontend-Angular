import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHandler } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { ExperienceComponent } from '../components/experience/experience.component';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiURL= "http://localhost:4200/experience"
  constructor(private http: HttpClientModule) { }

getInfo(): Observable<experiences[]> {
console.log('Obteniendo datos')
  return this.http.get(this.apiURL)
}
  
}
}
