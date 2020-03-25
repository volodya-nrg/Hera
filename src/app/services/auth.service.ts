import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserInterface} from '../interfaces/entity/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
	private userSubject: BehaviorSubject<UserInterface>;
	user$: Observable<UserInterface>;

	get user(): UserInterface {
		return this.userSubject.value;
	}

	@Input()
	set user(x: UserInterface) {
		localStorage.setItem('currentUser', JSON.stringify(x));
		this.userSubject.next(x);
	}

	constructor(
		private http: HttpClient
	) {
		const a = localStorage.getItem('currentUser');
		this.userSubject = new BehaviorSubject<UserInterface>(JSON.parse(a));
		this.user$ = this.userSubject.asObservable();
	}

	login(data: any): Observable<UserInterface> {
		return this.http.post<UserInterface>(`${environment.apiUrl}/login`, data)
			.pipe(
				map((x: UserInterface) => {
					this.user = x;
					return x;
				})
			);
	}

	logout() {
		localStorage.removeItem('currentUser');
		this.userSubject.next(null);
	}

	logoutHard(): Observable<Response> {
		this.logout();
		return this.http.get<Response>(`${environment.apiUrl}/logout`);
	}
}
