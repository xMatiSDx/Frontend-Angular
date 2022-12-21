import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Experiences } from 'exp';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiURL= 'http://localhost:3000/exp'

    constructor(private http: HttpClient) { }

  getInfo(): Observable<Experiences[]> {
    return this.http.get<Experiences[]>(this.apiURL)
  }
}
