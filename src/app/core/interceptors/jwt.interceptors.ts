import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headersConfig: any = {};
    const token = this.userService.getToken();
    console.log(token)
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
      headersConfig['X-Requested-With'] = `XMLHttpRequest`;
    }
    const request = req.clone({ setHeaders: headersConfig });

    return next.handle(request);
  }
}

