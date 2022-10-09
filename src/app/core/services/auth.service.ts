import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators'
import { async, BehaviorSubject, Observable, throwError, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  currentUser: any;

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  login(credentials: any): any {
    return this.http.post(`${environment.apiUrl}/login`, credentials).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        this.currentUser = res.user.name
        this.isLoginSubject.next(true);
      }),
      catchError(this.formatErrors)
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }


  async getStatus() {
    if (this.getToken()) {
      return
    } else {
      this.logout();
      return false;
    }
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  logout() {
    this.destroyToken();
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
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
