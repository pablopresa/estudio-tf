import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Noticia } from '../../model/noticia';
import { Router } from '@angular/router';
import { Mensajes } from '../../resources/mensajes';
import { NoticiasService } from '../../services/noticias.service';
import { SharedModules } from '../../shared.module';
import { SliceConPuntosPipe } from '../../pipes/slice-con-puntos.pipe';
import { MensajesService } from '../../services/mensajes.service';
import { Utiles } from '../../resources/utiles';
import { Boton } from '../../model/boton';
import { GlobalService } from '../../services/global.service';
import { noticiasConf } from '../../resources/configuracion';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../model/usuario';
import { NavbarComponent } from '../navbar/navbar.component';
import { InicioComponent } from "../inicio/inicio.component";
import { Mensaje } from '../../model/mensaje';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { NoticiasComponent } from "../noticias/noticias.component";

@Component({
  standalone: true,
  imports: [SharedModules, SliceConPuntosPipe, NavbarComponent, InicioComponent, NosotrosComponent, NoticiasComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {

  @ViewChild('siguienteSeccion')
  siguienteSeccion!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.verCards(scrollPosition > 50);
  }

  title = Mensajes.TITULO_PANTALLA;

  noticias: Noticia[] = [];
  mensajes: Mensaje[] = [];

  public estilosNavbar: any;
  public botones: Boton[] = [];

  public cantidadLetrasMostradasNoticia: number = 117

  public usuario: any = null;

  constructor(private authService: AuthService, private router: Router, private renderer: Renderer2,
    private elementRef: ElementRef, private noticiasService: NoticiasService,
    private mensajesService: MensajesService) {
    super();
  }

  ngOnInit(): void {

    if (this.authService.isAuthenticated()) {
      this.usuario = new Usuario('', '', '', 'A');
    }
    else {
      this.usuario = new Usuario('', '', '', 'U');
    }

    Promise.all([
      this.cargarDatos(this.mensajesService.obtenerMensajes(), 'mensajes'),
    ]).then(([mensajes]) => {
      this.mensajes = mensajes;
    }).catch((error) => {
      console.error('Error al cargar datos:', error);
    });
  }

  verCards(ver: boolean) {
    const cards = this.elementRef.nativeElement.querySelectorAll('.card-solucion');
    if (cards.length > 0) {
      cards.forEach((card: HTMLElement) => {
        this.renderer.setStyle(card, 'opacity', ver ? '1' : '0');
        this.renderer.setStyle(card, 'visibility', ver ? 'visible' : 'hidden');
      })
    }
  }

  public scrollear(boton: Boton) {
    let seccion = boton.valor;
    let tipo = boton.tipo;

    if (tipo == 'scroll') {
      const element = document.getElementById(seccion);
      const navbar = document.getElementById('navbar');
      if (element && navbar) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    else if (tipo == 'navegacion') {
      this.router.navigate([seccion]);
    }
  }

  verSolucion(tipo: string) {
    this.router.navigate([tipo]);
  }
}