import { Component } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  user: string = '';
  pass: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  formValid(): boolean {
    return this.user.trim() !== '' && this.pass.trim() !== '';
  }

  login(): void {
    this.errorMessage = '';
    if (this.formValid()) {
      this.authService.login(this.user, this.pass).subscribe(
        (response) => {
          this.authService.saveToken(response.accessToken);
          this.router.navigate(['']);
        },
        (error) => {
          this.errorMessage = 'Usuario o contraseña incorrecto.';
        }
      );
    }
  }
}
