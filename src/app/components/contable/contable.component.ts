import { Component } from '@angular/core';

@Component({
  selector: 'app-contable',
  templateUrl: './contable.component.html',
  styleUrl: './contable.component.css'
})
export class ContableComponent {
  volver() {
    history.back();
  }
}
