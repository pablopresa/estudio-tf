import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../resources/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'auth';

  constructor(private http: HttpClient) { }

  login(user: string, pass: string): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(this.apiUrl + '/login', { user, pass });
  }

  registro(user: string, pass: string): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(this.apiUrl + '/registro', { user, pass });
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
