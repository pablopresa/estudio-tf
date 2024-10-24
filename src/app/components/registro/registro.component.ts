import { Component } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  user: string = '';
  pass: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  formValid(): boolean {
    return this.user.trim() !== '' && this.pass.trim() !== '';
  }

  registro(): void {
    this.errorMessage = '';
    if (this.formValid()) {
      this.authService.registro(this.user, this.pass).subscribe(
        (response) => {
          this.authService.saveToken(response.accessToken);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = 'Usuario o contraseña incorrecto.';
        }
      );
    }
  }
}
