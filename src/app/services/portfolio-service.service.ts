import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { ExperienceComponent } from '../components/experience/experience.component';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiURL= "http://localhost:4200/experiences"
  constructor(private http: HttpClient) { }

  // getInfo(): Observable<experiences[]> {
  //   return this.http.get<experiences[]>(this.apiURL)
  // }
}
