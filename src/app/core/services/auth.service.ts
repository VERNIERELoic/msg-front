import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  login(user: any): any {
    return this.http.post(`${environment.apiUrl}/login`, user).pipe(shareReplay());
  }

  logout() {
    this.destroyToken();
    this.router.navigate(['/login'])
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  destroyToken() {
    localStorage.removeItem("token");
  }
}
