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

  getAllUsers(): any {
    return this.http.get(`${environment.apiUrl}/getallusers`);
  }

  getUserById(id: any): any {
    return this.http.get(`${environment.apiUrl}/getuser/${id}`);
  }

  updateUser(user: any): any {
    return this.http.post(`${environment.apiUrl}/updateuser`, user);
  }

  removeUser(id: any): any {
    return this.http.delete(`${environment.apiUrl}/removeuser/${id}`);
  }

  removeAdmin(id: any): any {
    return this.http.put(`${environment.apiUrl}/removeadmin`, id);
  }

  addAdmin(id: any): any {
    return this.http.put(`${environment.apiUrl}/addadmin`, id);
  }
}
