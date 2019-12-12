import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from '../../constants/urls';
import { ToasterService } from 'angular2-toaster';
import { catchError } from 'rxjs/operators';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = req.clone({ url: `${ BASE_URL }${ req.url }` });
    return next.handle(apiRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status >= 400) {
              this.toasterService.pop('error', 'Oops!', 'Something went wrong');
            }
            return throwError(error);
          }
        })
      );
  }
}
