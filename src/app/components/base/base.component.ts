import { Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  
  async cargarDatos<T>(observable: Observable<T>, nombreError: string): Promise<T> {
    try {
      return await firstValueFrom(observable);
    } catch (error) {
      console.error(`Error al obtener ${nombreError}:`, error);
      throw error;
    }
  }
}
