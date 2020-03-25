import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private authService: AuthService
	) {
		console.log('init ErrorInterceptor');
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError(err => {
				console.log('ErrorInterceptor');

				if (err.status === 401) {
					this.authService.logout();
				}

				alert(err.error);
				const error = err.error.message || err.statusText;
				return throwError(error);
			})
		);
	}
}
