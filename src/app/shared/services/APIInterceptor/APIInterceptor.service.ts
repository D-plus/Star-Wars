import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants/urls';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = req.clone({ url: `${ BASE_URL }${ req.url }` });
    return next.handle(apiRequest);
  }
}
