import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { async, BehaviorSubject, Observable, throwError, shareReplay, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[] = [];

  constructor(private http: HttpClient) { }

  getAllUsers() :any{
    console.log("list des users :")
    return this.http.get(`${environment.apiUrl}/getallusers`);
  }
  getUser(username: any): any {
    return this.http.get(`${environment.apiUrl}/getuser`, username);
  }

  dropUser(email: any): any{
    return this.http.post(`${environment.apiUrl}/dropuser`, email);
  }

  removeAdmin(email: any): any{
    return this.http.post(`${environment.apiUrl}/removeadmin`, email);
  }
}
