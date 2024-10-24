import { Component } from '@angular/core';
import { SharedModules } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudio-tf';
}
