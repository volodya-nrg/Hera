import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService,
	) {
		console.log('init AuthGuard');
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('AuthGuard');

		if (this.authService.user) {
			return true;
		}
		this.router.navigate(['/login-via-email'], {
			queryParams: {
				return: state.url
			}
		});
		return false;
	}
}
