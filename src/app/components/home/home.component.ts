import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Noticia } from '../../model/noticia';
import { Router } from '@angular/router';
import { Mensajes } from '../../resources/mensajes';
import { NoticiasService } from '../../services/noticias.service';
import { SharedModules } from '../../shared.module';
import { SliceConPuntosPipe } from '../../pipes/slice-con-puntos.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MensajesService } from '../../services/mensajes.service';
import { Mensaje } from '../../model/mensaje';
import { Utiles } from '../../resources/utiles';
import { Boton } from '../../model/boton';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [SharedModules, SliceConPuntosPipe, HttpClientModule], // Incluye HttpClientModule
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

  public descripcionEmpresa: string = Mensajes.TEXTO_DESCRIPCION_EMPRESA;
  public tituloSolucionContable: string = Mensajes.TITULO_SOLUCION_CONTABLE;
  public tituloSolucionJuridica: string = Mensajes.TITULO_SOLUCION_JURIDICA;
  public botonMas: string = Mensajes.BOTON_MAS;
  public tituloSobreNosotros: string = Mensajes.TITULO_SOBRE_NOSOTROS;
  public tituloPantalla: string = Mensajes.TITULO_PANTALLA;
  public frase1: string = Mensajes.FRASE_STEVE_JOBS1;
  public frase2: string = Mensajes.FRASE_STEVE_JOBS2;
  public sobreNosotros: string = Mensajes.SOBRE_NOSOTROS;
  public estilosNavbar: any;
  public botones: Boton[] = [];
  public cantidadLetrasMostradasNoticia: number = 110;

  public tituloFlo = '';
  public descripcionFlo: string[] = [];
  public tituloJuli = '';
  public descripcionJuli: string[] = [];
  public tituloCabezal = '';

  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef,
    private noticiasService: NoticiasService, private mensajesService: MensajesService) {
    super();
  }

  ngOnInit(): void {

    const color1 = '#e6e6e6';
    const color2 = 'var(--orange-100)';
    this.estilosNavbar = {
      'background-image': 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')',
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'z-index': 40
    };

    Promise.all([
      this.cargarDatos(this.mensajesService.obtenerMensajes(), 'mensajes'),
      this.cargarDatos(this.noticiasService.obtenerNoticias(), 'noticias'),
      this.cargarDatos(this.mensajesService.obtenerBotones(), 'botones')
    ]).then(([mensajes, noticias, botones]) => {

      this.noticias = noticias;
      this.botones = Utiles.ordenar(botones);
      this.tituloFlo = Utiles.obtenerMensajes('presentacion-titulo-flo', mensajes)[0];
      this.descripcionFlo = Utiles.obtenerMensajes('presentacion-descripcion-flo', mensajes);
      this.tituloJuli = Utiles.obtenerMensajes('presentacion-titulo-juli', mensajes)[0];
      this.descripcionJuli = Utiles.obtenerMensajes('presentacion-descripcion-juli', mensajes);
      this.tituloCabezal = Utiles.obtenerMensajes('cabezal-titulo', mensajes)[0];
    }).catch((error) => {
      console.error('Error al cargar datos:', error);
    });
  }

  async cargarDatos<T>(observable: Observable<T>, nombreError: string): Promise<T> {
    try {
      return await firstValueFrom(observable);
    } catch (error) {
      console.error(`Error al obtener ${nombreError}:`, error);
      throw error;
    }
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

  public scrollear(seccion: string, tipo: string) {
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

  verNoticia(noticia: Noticia) {
    console.log(noticia);
    this.router.navigate(['noticias'], { state: { data: noticia } });
  }

  verSolucion(tipo: string) {
    this.router.navigate([tipo]);
  }
}