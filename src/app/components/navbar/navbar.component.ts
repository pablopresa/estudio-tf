import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { Boton } from '../../model/boton';
import { MensajesService } from '../../services/mensajes.service';
import { BaseComponent } from '../base/base.component';
import { Utiles } from '../../resources/utiles';
import { Usuario } from '../../model/usuario';
import { Mensaje } from '../../model/mensaje';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent extends BaseComponent implements OnInit {

  @Input() mensajes: Mensaje[] = [];
  @Input() usuario: Usuario | undefined;
  @Output() scroll: EventEmitter<Boton> = new EventEmitter<Boton>();

  tituloCabezal: string = '';
  botones: Boton[] = [];

  constructor(private mensajesService: MensajesService) {
    super();
  }

  ngOnInit(): void {
    this.tituloCabezal = Utiles.obtenerMensajes('cabezal-titulo', this.mensajes)[0];
    this.cargarDatos(this.mensajesService.obtenerBotones(), 'botones')
      .then((botones: Boton[]) => {
        let botonesArray: Boton[] = botones;
        botonesArray = botonesArray.filter(boton => boton.rol == this.usuario?.rol);
        this.botones = Utiles.ordenarAscendente(botonesArray, 'orden');
      })
  }

  scrollear(boton: Boton) {
    this.scroll.emit(boton);
  }

}
