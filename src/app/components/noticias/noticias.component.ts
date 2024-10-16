import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {

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
