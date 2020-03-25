import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Helpers} from '../../helpers';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-anketa',
	templateUrl: './anketa.component.html',
	styleUrls: ['./anketa.component.less'],
	encapsulation: ViewEncapsulation.None,
})
export class AnketaComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	private subscriptions: Subscription[] = [];
	form: FormGroup;
	apiUrl = environment.apiUrl;

	constructor(
		private fb: FormBuilder,
		private usersService: UsersService,
		public authService: AuthService,
	) {
		console.log('init AnketaComponent');
	}

	ngOnInit() {
		this.form = this.fb.group({
			avatar: this.authService.user.avatar,
			file: null,
			name: this.authService.user.name,
			sex: this.authService.user.sex,
			height: this.authService.user.height,
			dateAge: Helpers.dateToHTML(this.authService.user.dateAge),
			cityId: this.authService.user.cityId,
			cityName: this.authService.user.cityName,
		});

		this.subscription = this.form.valueChanges.subscribe(changedData => {
			this.usersService.update(changedData).subscribe(y => this.authService.user = y);
		});
		this.subscriptions.push(this.subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(x => x.unsubscribe());
	}

	listenCity($event) {
		this.form.patchValue({
			cityId: $event.cityId,
			cityName: $event.cityName,
		});
	}
}
