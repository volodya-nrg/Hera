import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from './services/app.service';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	paddingBottom: number;

	constructor(
		private appService: AppService,
	) {
		console.log('init AppComponent');
	}

	ngOnInit() {
		this.paddingBottom = 0;
		this.subscription = this.appService.getOffsetBottom.subscribe(x => this.paddingBottom = x);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
