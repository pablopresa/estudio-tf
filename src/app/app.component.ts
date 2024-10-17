import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudio-tf';
}
