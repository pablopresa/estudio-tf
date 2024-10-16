import { Component } from '@angular/core';

@Component({
  selector: 'app-juridica',
  templateUrl: './juridica.component.html',
  styleUrl: './juridica.component.css'
})
export class JuridicaComponent {

  volver() {
    history.back();
  }
}
