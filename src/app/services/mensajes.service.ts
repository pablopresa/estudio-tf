import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../resources/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  apiUrl = environment.apiUrl + 'mensajes';

  constructor(private http: HttpClient) { }

  obtenerMensajes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerBotones(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/botones');
  }

}
