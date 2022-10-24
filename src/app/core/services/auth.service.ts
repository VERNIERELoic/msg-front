import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators'
import { async, BehaviorSubject, Observable, throwError, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  currentUser: Subject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { }

  current() {
    return this.http.get(`${environment.apiUrl}/current`).pipe(shareReplay(), map((user: any) => { this.currentUser.next(user.user); return user.user }))
  }

  addUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  login(credentials: any): any {
    return this.http.post(`${environment.apiUrl}/login`, credentials).pipe(
      map((res: any) => {
        console.log(res)
        localStorage.setItem('token', res.authorisation.token);
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
    this.http.get(`${environment.apiUrl}/logout`);
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


  get currentUserValue() {
    //@ts-ignore
    return this.currentUser.value;
  }
}
