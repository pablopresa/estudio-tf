import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent extends BaseComponent implements OnInit {

  public isMobile: boolean = false;
  public subtituloContable = '';
  public subtituloJuridica = '';

  constructor(private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.checkScreenSize();
    if(!this.isMobile){
      this.subtituloContable = 'Cra. Florencia Tassano';
      this.subtituloJuridica = 'Dra. Juliana Tassano';
    }

  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1000;
  }

  verSolucion(tipo: string) {
    this.router.navigate([tipo]);
  }
}
