import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Education } from 'edu';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private apiURL= 'http://localhost:3000/edu'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Education[]> {
  return this.http.get<Education[]>(this.apiURL)
}
}
