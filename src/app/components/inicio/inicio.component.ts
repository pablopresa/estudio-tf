import { Component } from '@angular/core';
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
export class InicioComponent extends BaseComponent {

  constructor(private router: Router) {
    super();
  }

  verSolucion(tipo: string) {
    this.router.navigate([tipo]);
  }
}
