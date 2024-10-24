import { Component, NgZone, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { BaseComponent } from '../base/base.component';
import { Noticia } from '../../model/noticia';
import { CrearNoticiaComponent } from '../crear-noticia/crear-noticia.component';
import { GestionarNoticiasComponent } from '../gestionar-noticias/gestionar-noticias.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-noticias',
  standalone: true,
  imports: [SharedModules, CrearNoticiaComponent, GestionarNoticiasComponent],
  templateUrl: './menu-noticias.component.html',
  styleUrl: './menu-noticias.component.css'
})
export class MenuNoticiasComponent extends BaseComponent {

  noticias: Noticia[] = [];
  pagina: string = 'menu';

  constructor(private router: Router) {
    super();
  }

  gestionarNoticias() {
    this.pagina = 'gestionarNoticias';
  }

  crearNoticia() {
    this.pagina = 'crearNoticia';
  }

  volver() {
    this.pagina = 'menu';
  }

  volverAlInicio() {
    this.router.navigate(['']);
  }
}
