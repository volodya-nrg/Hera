import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {ModalBasicInterface} from '../../interfaces/other/modalBasic.interface';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.less'],
	encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
	private subscription: Subscription;
	settings: ModalBasicInterface;
	@ViewChild('ngTemplateOutletContainer', {static: true}) ngTemplateOutletContainer: ViewContainerRef;

	constructor(
		private modalService: ModalService,
	) {
		console.log('init ModalComponent');
	}

	ngOnInit() {
		this.subscription = this.modalService.settings$.subscribe(x => this.settings = x);
	}

	ngOnDestroy(): void {
		// this.subscription.unsubscribe();
	}

	ngAfterViewInit() {
	}

	onClickFix({target}): void {
		if (!target.classList.contains('components_modal_fix')) {
			return;
		}

		this.hide();
	}

	hide(): void {
		this.modalService.settings.isShowModal = false;
	}
}
