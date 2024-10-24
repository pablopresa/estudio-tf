import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private usuario: Usuario = new Usuario('', '', '', 'U');

  constructor() { }

  public setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  public getUsuario(): Usuario {
    return this.usuario;
  }

}
