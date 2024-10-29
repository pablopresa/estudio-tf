import { Component } from '@angular/core';
import { SharedModules } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModules],  // Solo SharedModules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudio-tf';
}

