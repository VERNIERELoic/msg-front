import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { async, BehaviorSubject, Observable, throwError, shareReplay, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  cfr: any;

  constructor(private http: HttpClient) { }

  getSchedules(): any {
    return this.http.get(`${environment.apiUrl}/timetable`);
  }

}
