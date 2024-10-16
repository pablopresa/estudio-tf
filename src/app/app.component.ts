import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { TestHttpComponent } from './test-http/test-http.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet, TestHttpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudio-tf';
}
