import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { SharedModules } from '../../shared.module';
import { Mensaje } from '../../model/mensaje';
import { Utiles } from '../../resources/utiles';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent extends BaseComponent implements OnInit {

  @Input() mensajes: Mensaje[] | undefined;

  public tituloFlo = '';
  public descripcionFlo: string[] = [];
  public tituloJuli = '';
  public descripcionJuli: string[] = [];

  ngOnInit(): void {
    this.tituloFlo = Utiles.obtenerMensajes('presentacion-titulo-flo', this.mensajes)[0];
    this.descripcionFlo = Utiles.obtenerMensajes('presentacion-descripcion-flo', this.mensajes);
    this.tituloJuli = Utiles.obtenerMensajes('presentacion-titulo-juli', this.mensajes)[0];
    this.descripcionJuli = Utiles.obtenerMensajes('presentacion-descripcion-juli', this.mensajes);
  }
}
