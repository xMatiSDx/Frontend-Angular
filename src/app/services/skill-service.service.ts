import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from 'skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiURL= 'http://localhost:3000/skills'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiURL)
  }
}
