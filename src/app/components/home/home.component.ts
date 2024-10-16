import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Noticia } from '../../model/noticia';
import { Router } from '@angular/router';
import { Mensajes } from '../../resources/mensajes';
import { NoticiasService } from '../../services/noticias.service';
import { SharedModules } from '../../shared.module';
import { SliceConPuntosPipe } from '../../pipes/slice-con-puntos.pipe';
import { HttpClientModule } from '@angular/common/http';

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
  botones: any[] = [
    { titulo: 'Inicio', valor: 'inicio', tipo: 'scroll' },
    { titulo: 'Nosotros', valor: 'nosotros', tipo: 'scroll' },
    { titulo: 'Noticias', valor: 'noticias', tipo: 'scroll' },
    { titulo: 'Legal', valor: 'juridica', tipo: 'navegacion' },
    { titulo: 'Contable', valor: 'contable', tipo: 'navegacion' },
    { titulo: 'Contacto', valor: 'contacto', tipo: 'scroll' }
  ];
  public cantidadLetrasMostradasNoticia: number = 110;
  public tituloFlo = 'Florencia Tassano Ferrés'
  public descripcionFlo: string[] = [
    'Hola! Soy Florencia, una mamá emprendedora de 31 años, con experiencia en Contabilidad y Recursos Humanos, me formé en la Universidad de la República del Uruguay.',
    'Luego de varios años de administrar mi propio emprendimiento, decidí ofrecer asesoramiento a empresas y personas que lo necesiten, con el objetivo de seguir ganando experiencia y equilibrar mi vida laboral y familiar.',
    'Mi objetivo es facilitar la vida de mis clientes ocupándome de las complejidades administrativas y contables, permitiéndoles enfocarse en el crecimiento y éxito de sus negocios.'
  ];

  public tituloJuli = 'Juliana Tassano Ferrés'
  public descripcionJuli: string[] = [
    'Hola, mi nombre es Juliana Tassano Ferrés, soy Abogada egresada de la Udelar. Me considero una apasionada del derecho.',
    'Abrimos este nuevo espacio junto con mi hermana para poder tener más llegada a uds, y que a su vez uds tengan un espacio para poder obtener más herramientas legales y contables mediante los conocimientos y experiencias que iremos compartiendo.'
  ];

  public tituloCabezal: string = 'Estudio Tassano Ferrés';

  private screenWidth: number | null = null;
  private screenHeight: number | null = null;

  constructor(private noticiasService: NoticiasService, private router: Router, private renderer: Renderer2, private elementRef: ElementRef,
  ) {
    super();
  }

  ngOnInit(): void {

    this.verCards(true);
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

    this.cargarNoticias();
  }

  cargarNoticias() {
    this.noticiasService.obtenerNoticias().subscribe(
      (data) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error al obtener noticias:', error);
      }
    );
  }

  verCards(ver: boolean) {
    const cards = this.elementRef.nativeElement.querySelectorAll('.card-solucion');
    if (cards.length > 0) {
      cards.forEach((card: HTMLElement) => {
        this.renderer.setStyle(card, 'opacity', ver ? '1' : '0');
        this.renderer.setStyle(card, 'visibility', ver ? 'visible' : 'hidden');
      })
      // const botones = this.elementRef.nativeElement.querySelectorAll('.card-solucion-button');
      // if (botones.length > 0) {
      //   botones.forEach((boton: HTMLElement) => {
      //     this.renderer.setStyle(boton, 'opacity', ver ? '1' : '0');
      //     this.renderer.setStyle(boton, 'visibility', ver ? 'visible' : 'hidden');
      //   });
      // }
    }
  }

  public scrollear(seccion: string, tipo: string) {
    if (tipo == 'scroll') {
      const element = document.getElementById(seccion);
      const navbar = document.getElementById('navbar');
      if (element && navbar) {
        const navbarHeight = navbar.offsetHeight;
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