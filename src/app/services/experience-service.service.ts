import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Experiences } from 'exp';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private showAddExp: boolean = false
  private subjet = new Subject<any>();

  private apiURL= 'http://localhost:3000/exp'

    constructor(private http: HttpClient) { }

  getInfo(): Observable<Experiences[]> {
    return this.http.get<Experiences[]>(this.apiURL)
  }

  addExp(exp: Experiences): Observable<Experiences> {
  return this.http.post<Experiences>(this.apiURL, exp, httpOptions)
  }


  toggleAddExp(): void {
    this.showAddExp = !this.showAddExp;
    this.subjet.next(this.showAddExp);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }


}
