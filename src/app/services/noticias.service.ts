import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../resources/environment';
import { Utiles } from '../resources/utiles';
import { noticiasConf } from '../resources/configuracion';
import { Noticia } from '../model/noticia';
import { CrearNoticiaDto } from '../model/crear-noticia-dto';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  apiUrl = environment.apiUrl + 'noticias';

  constructor(private http: HttpClient) { }

  obtenerNoticias(cantidad?: number): Observable<any> {

    const orden = noticiasConf.orden;

    let queryParam = '?orden=' + orden.orden + '&campo=' + orden.campo;
    queryParam += (cantidad) ? '&cantidad=' + cantidad : '';

    return this.http.get<any>(this.apiUrl + queryParam).pipe(
      map(response => {
        response.forEach((noticia: any) => {
          const fecha = new Date(noticia.fecha);
          noticia.fechaString = Utiles.formatearFecha(fecha);
        });
        return response;
      })
    );
  }

  crearNoticia(noticia: CrearNoticiaDto): Observable<any> {
    return this.http.post(this.apiUrl, noticia);
  }

  editarNoticia(noticia: Noticia): Observable<Noticia> {
    return of(noticia);
  }

  eliminarNoticia(noticia: Noticia): Observable<Noticia> {
    return of(noticia);
  }

}
