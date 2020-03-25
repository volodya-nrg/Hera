import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	constructor() {
		console.log('init ApiInterceptor');
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('ApiInterceptor');

		request = request.clone({
			withCredentials: true
		});
		return next.handle(request);
	}
}
