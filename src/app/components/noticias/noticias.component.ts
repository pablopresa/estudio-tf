import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../model/noticia';
import { noticiasConf } from '../../resources/configuracion';
import { SharedModules } from '../../shared.module';
import { SliceConPuntosPipe } from '../../pipes/slice-con-puntos.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [SharedModules, SliceConPuntosPipe],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent extends BaseComponent implements OnInit {

  noticias: Noticia[] = [];
  cantidadLetrasMostradasNoticia: number = 110;
  public isMobile: boolean = false;

  constructor(private noticiasService: NoticiasService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 1000;
    this.cargarDatos(this.noticiasService.obtenerNoticias((this.isMobile) ? 2 : noticiasConf.cantidadNoticiasHome), 'noticias').then(
      (noticias: Noticia[]) => {
        this.noticias = noticias;
      });
  }

  verNoticia(noticia: Noticia) {
    this.router.navigate(['noticias'], { state: { data: noticia } });
  }
}
