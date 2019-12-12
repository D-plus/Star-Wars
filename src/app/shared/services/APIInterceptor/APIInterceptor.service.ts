import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from '../../constants/urls';
import { ToasterService } from 'angular2-toaster';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes';
import { ERROR } from '../../constants/common';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = req.clone({ url: `${ BASE_URL }${ req.url }` });
    return next.handle(apiRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status >= 400) {
              if (error.error && error.error.detail === 'Not found') {
                this.router.navigate([ROUTES.PEOPLE], {queryParams: { page: 1, query: ''}});
              }
              this.toasterService.pop('error', ERROR.TITLE, ERROR.INTERCEPTORS_MESSAGE);
            }
            return throwError(error);
          }
        })
      );
  }
}
