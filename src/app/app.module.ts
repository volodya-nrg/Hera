// МОДУЛИ
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
// КОМПОНЕНТЫ
import {AppComponent} from './app.component';
// страницы
import {PageEatComponent} from './components/_page/eat/eat.component';
import {PageLikeMindedPeopleComponent} from './components/_page/like-minded-people/like-minded-people.component';
import {PageLoginViaEmailComponent} from './components/_page/login/via-email/via-email.component';
import {PageLoginViaSocComponent} from './components/_page/login/via-soc/via-soc.component';
import {PageMainComponent} from './components/_page/main/main.component';
import {PageNotFoundComponent} from './components/_page/notfound/notfound.component';
import {PageNotesNoteIdComponent} from './components/_page/notes/note-id/note-id.component';
import {PageNotesNewComponent} from './components/_page/notes/new/new.component';
import {PageProductsComponent} from './components/_page/products/products.component';
import {PageProfileComponent} from './components/_page/profile/profile.component';
import {PageProfilePersonalDataComponent} from './components/_page/profile/personal-data/personal-data.component';
import {PageRationsAdditionComponent} from './components/_page/rations/addition/addition.component';
import {PageRationsRationIdComponent} from './components/_page/rations/ration-id/ration-id.component';
import {PageRecoverComponent} from './components/_page/recover/recover.component';
import {PageRegComponent} from './components/_page/reg/reg.component';
import {PageRegTellAboutYourselfStep1Component} from './components/_page/reg/tell-about-yourself/step-1/step-1.component';
import {PageRegTellAboutYourselfStep2Component} from './components/_page/reg/tell-about-yourself/step-2/step-2.component';
import {PageResultFatComponent} from './components/_page/result/fat/fat.component';
import {PageResultKkComponent} from './components/_page/result/kk/kk.component';
import {PageResultPhotoBeforeAndAfterComponent} from './components/_page/result/photo/before-and-after/before-and-after.component';
import {PageResultPhotoComponent} from './components/_page/result/photo/photo.component';
import {PageResultWeightComponent} from './components/_page/result/weight/weight.component';
import {PageSportComponent} from './components/_page/sport/sport.component';
import {PageWeighingComplianceComponent} from './components/_page/weighing/compliance/compliance.component';
import {PageWeighingComponent} from './components/_page/weighing/weighing.component';
// части
import {AmountGramForModalComponent} from './components/amount-gram-for-modal/amount-gram-for-modal.component';
import {AnketaComponent} from './components/anketa/anketa.component';
import {CalorieContentComponent} from './components/calorie-content/calorie-content.component';
import {CaloriesPlusMinusComponent} from './components/calories-plus-minus/calories-plus-minus.component';
import {ChartComponent} from './components/chart/chart.component';
import {CloudInstagramComponent} from './components/cloud-instagram/cloud-instagram.component';
import {CloudMsgComponent} from './components/cloud-msg/cloud-msg.component';
import {CloudNoteComponent} from './components/cloud-note/cloud-note.component';
import {CloudPowerComponent} from './components/cloud-power/cloud-power.component';
import {DataForEnterComponent} from './components/data-for-enter/data-for-enter.component';
import {FirstWeighingComponent} from './components/first-weighing/first-weighing.component';
import {FlyPiesComponent} from './components/fly-pies/fly-pies.component';
import {FoodIntakeComponent} from './components/food-intake/food-intake.component';
import {HeaderComponent} from './components/header/header.component';
import {InputHighComponent} from './components/input-high/input-high.component';
import {LikeMindedPeopleComponent} from './components/like-minded-people/like-minded-people.component';
import {MenuFlyBottomComponent} from './components/menu-fly-bottom/menu-fly-bottom.component';
import {ModalComponent} from './components/modal/modal.component';
import {ModalBlockComponent} from './components/modal-block/modal-block.component';
import {ModalInfoComponent} from './components/modal-info/modal-info.component';
import {MoreComponent} from './components/more/more.component';
import {NotificationFormComponent} from './components/notification-form/notification-form.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PiesIngredientsComponent} from './components/pies-ingredients/pies-ingredients.component';
import {PointsComponent} from './components/points/points.component';
import {PopoverComponent} from './components/popover/popover.component';
import {ProfileInfoComponent} from './components/profile-info/profile-info.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {RationCopyingComponent} from './components/ration-copying/ration-copying.component';
import {RationFiltersComponent} from './components/ration-filters/ration-filters.component';
import {RationMiniatureComponent} from './components/ration-miniature/ration-miniature.component';
import {RationPopularsComponent} from './components/ration-populars/ration-populars.component';
import {RationYoursComponent} from './components/ration-yours/ration-yours.component';
import {RecommendationOfTheWeekComponent} from './components/recommendation-of-the-week/recommendation-of-the-week.component';
import {ReferenceComponent} from './components/reference/reference.component';
import {ResultsComponent} from './components/results/results.component';
import {SearcherComponent} from './components/searcher/searcher.component';
import {SocComponent} from './components/soc/soc.component';
import {TemplateComponent} from './components/template/template.component';
import {TextareaPlusComponent} from './components/textarea-plus/textarea-plus.component';
import {TextareaSendComponent} from './components/textarea-send/textarea-send.component';
import {TopForModalComponent} from './components/top-for-modal/top-for-modal.component';
import {WhatDoYouWantComponent} from './components/what-do-you-want/what-do-you-want.component';
import {YourActivityComponent} from './components/your-activity/your-activity.component';
import {CheckboxradioBlockComponent} from './components/checkboxradio-block/checkboxradio-block.component';
import {PersonalFeedsComponent} from './components/personal-feeds/personal-feeds.component';
import {NotesComponent} from './components/notes/notes.component';
import {ResultDetailInfoComponent} from './components/result-detail-info/result-detail-info.component';
import {CalendarStatisticComponent} from './components/calendar-statistic/calendar-statistic.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {LoadingComponent} from './components/loading/loading.component';
import {RadiocheckboxComponent} from './components/radiocheckbox/radiocheckbox.component';
import {ProductRowWithInfoComponent} from './components/product-row-with-info/product-row-with-info.component';
import {PageProductsItemComponent} from './components/_page/products/item/item.component';
// СЕРВИСЫ
// INTERCEPTOR
import {ApiInterceptor} from './interceptors/api.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
// GUARDS
import {AuthGuard} from './guards/auth.guard';
import {ReadIntroGuard} from './guards/readIntro.guard';
import {CheckReadIntroGuard} from './guards/checkReadIntro.guard';
// DIRECTIVES
import {BackBtnDirective} from './directive/backBtn.directive';
import {ModalInfoDirective} from './directive/modalInfo.directive';
import {ModalBlockDirective} from './directive/modalBlock.directive';
import {FileInputValueDirective} from './directive/file.directive';
// LIBRARY
import {SlickCarouselModule} from 'ngx-slick-carousel';
// РОУТИНГ
const routes: Routes = [
	{path: '', redirectTo: 'main', pathMatch: 'full'},
	{path: 'eat', component: PageEatComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'like-minded-people', component: PageLikeMindedPeopleComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'login', redirectTo: 'login-via-soc', pathMatch: 'full'},
	{path: 'login-via-email', component: PageLoginViaEmailComponent, canActivate: [CheckReadIntroGuard]},
	{path: 'login-via-soc', component: PageLoginViaSocComponent, canActivate: [CheckReadIntroGuard]},
	{path: 'main', component: PageMainComponent, canActivate: [CheckReadIntroGuard]},
	{path: 'notes/new', component: PageNotesNewComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'notes/:noteId', component: PageNotesNoteIdComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'products/:productId', component: PageProductsItemComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'products', component: PageProductsComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'profile/personal-data', component: PageProfilePersonalDataComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'profile', component: PageProfileComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'rations/addition', component: PageRationsAdditionComponent, canActivate: [AuthGuard]}, // ReadIntroGuard
	{path: 'rations/:rationId', component: PageRationsRationIdComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'recover', component: PageRecoverComponent, canActivate: [CheckReadIntroGuard]},
	{path: 'reg/tell-about-yourself', redirectTo: 'reg/tell-about-yourself/step-1', pathMatch: 'full'},
	{path: 'reg/tell-about-yourself/step-1', component: PageRegTellAboutYourselfStep1Component, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'reg/tell-about-yourself/step-2', component: PageRegTellAboutYourselfStep2Component, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'reg', component: PageRegComponent, canActivate: [CheckReadIntroGuard]},
	{path: 'result/fat', component: PageResultFatComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'result/kk', component: PageResultKkComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{
		path: 'result/photo/before-and-after',
		component: PageResultPhotoBeforeAndAfterComponent,
		canActivate: [AuthGuard, CheckReadIntroGuard]
	},
	{path: 'result/photo', component: PageResultPhotoComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'result/weight', component: PageResultWeightComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'result', redirectTo: 'result/weight', pathMatch: 'full'},
	{path: 'sport', component: PageSportComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'weighing/compliance', component: PageWeighingComplianceComponent, canActivate: [AuthGuard, CheckReadIntroGuard]},
	{path: 'weighing', component: PageWeighingComponent, canActivate: [AuthGuard, ReadIntroGuard]},
	{path: '**', component: PageNotFoundComponent, canActivate: [CheckReadIntroGuard]},
];

@NgModule({
	// модули, классы которых необходимы для шаблонов компонентов текущего модуля
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes, {
			enableTracing: false
		}),
		SlickCarouselModule,
	],
	declarations: [
		BackBtnDirective,
		ModalInfoDirective,
		ModalBlockDirective,
		FileInputValueDirective,
		AmountGramForModalComponent,
		AnketaComponent,
		AppComponent,
		CalorieContentComponent,
		CaloriesPlusMinusComponent,
		ChartComponent,
		CheckboxradioBlockComponent,
		CloudInstagramComponent,
		CloudMsgComponent,
		CloudNoteComponent,
		CloudPowerComponent,
		DataForEnterComponent,
		FirstWeighingComponent,
		FlyPiesComponent,
		FoodIntakeComponent,
		HeaderComponent,
		InputHighComponent,
		LikeMindedPeopleComponent,
		MenuFlyBottomComponent,
		ModalComponent,
		ModalBlockComponent,
		ModalInfoComponent,
		MoreComponent,
		NotificationFormComponent,
		NotificationsComponent,
		PageEatComponent,
		PageLikeMindedPeopleComponent,
		PageLoginViaEmailComponent,
		PageLoginViaSocComponent,
		PageMainComponent,
		PageNotFoundComponent,
		PageNotesNewComponent,
		PageNotesNoteIdComponent,
		PageProductsComponent,
		PageProfileComponent,
		PageProfilePersonalDataComponent,
		PageRationsAdditionComponent,
		PageRationsRationIdComponent,
		PageRecoverComponent,
		PageRegComponent,
		PageRegTellAboutYourselfStep1Component,
		PageRegTellAboutYourselfStep2Component,
		PageResultFatComponent,
		PageResultKkComponent,
		PageResultPhotoBeforeAndAfterComponent,
		PageResultPhotoComponent,
		PageResultWeightComponent,
		PageSportComponent,
		PageWeighingComplianceComponent,
		PageWeighingComponent,
		PhotosComponent,
		PiesIngredientsComponent,
		PointsComponent,
		PopoverComponent,
		ProfileInfoComponent,
		ProgressBarComponent,
		RationCopyingComponent,
		RationFiltersComponent,
		RationMiniatureComponent,
		RationPopularsComponent,
		RationYoursComponent,
		RecommendationOfTheWeekComponent,
		ReferenceComponent,
		ResultsComponent,
		SearcherComponent,
		SocComponent,
		TemplateComponent,
		TextareaPlusComponent,
		TextareaSendComponent,
		TopForModalComponent,
		WhatDoYouWantComponent,
		YourActivityComponent,
		PersonalFeedsComponent,
		NotesComponent,
		ResultDetailInfoComponent,
		CalendarStatisticComponent,
		TabsComponent,
		LoadingComponent,
		RadiocheckboxComponent,
		ProductRowWithInfoComponent,
		PageProductsItemComponent,
	],

	// классы, создающие сервисы, используемые модулем
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
	],
	exports: [],

	// корневой компонент, который вызывается по умолчанию при загризки приложения
	bootstrap: [AppComponent]
})
export class AppModule {
}
