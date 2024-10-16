import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  apiUrl = 'http://localhost:3000/noticias';
  
  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
