import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrl: './detalle-noticia.component.css'
})
export class DetalleNoticiaComponent implements OnInit {

  constructor() {

  }

  noticia: Noticia | null = null;

  ngOnInit(): void {
    if (history.state.data != null) {
      this.noticia = history.state.data as Noticia;
    }
  }

  volver() {
    history.back();
  }
}
