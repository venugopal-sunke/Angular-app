import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BindingComponent } from './binding/binding.component';
import { RepeatloopComponent } from './repeatloop/repeatloop.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './customdirectives/highlight.directive';
import { MouseeventDirective } from './customdirectives/mouseevent.directive';
import { CardhoverDirective } from './customdirectives/cardhover.directive';
import { PipesComponent } from './pipes/pipes.component';
import { AgePipe } from './custompipes/age.pipe';
import { ArraysortPipe } from './custompipes/arraysort.pipe';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { AngularserviceComponent } from './angularservice/angularservice.component';
import { SearchFilterPipe } from './custompipes/search-filter.pipe';
import { UserdialogComponent } from './angularservice/userdialog/userdialog.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { StaticformsComponent } from './angularforms/staticforms/staticforms.component';
import { ReactiveformsComponent } from './angularforms/reactiveforms/reactiveforms.component';
import { RoutingComponent } from './routing/routing.component';
import { UserinfoComponent } from './routing/userinfo/userinfo.component';
import { ViewComponent } from './view/view.component';
import { ViewchildComponent } from './view/viewchild/viewchild.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { HooksComponent } from './hooks/hooks.component';
import { HookchildComponent } from './hooks/hookchild/hookchild.component';
import { ChildoneComponent } from './communication/childone/childone.component';
import { AddressComponent } from './routing/address/address.component';
import { CompanyComponent } from './routing/company/company.component';
import { GuardsComponent } from './guards/guards.component';
import { HttpusersService } from './services/httpusers.service';
import { AuthService } from './services/auth.service';
import { UserserviceService } from './services/userservice.service';
import { Counter1Service } from './services/counter1.service';
import { Counter2Service } from './services/counter2.service';
import { Counter3Service } from './services/counter3.service';
import { Counter4Service } from './services/counter4.service';
import { AuthenticateService } from './services/authenticate.service';
import { FakeauthenticateService } from './services/fakeauthenticate.service';
   
import { InjectionToken, isDevMode } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { TestService } from './services/test.service';
import { counterFactory } from './services/counter.factory';
import { LogstatusComponent } from './providers/logstatus/logstatus.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { FormsComponent } from './angularforms/ngrxforms/form.component';
import { userReducer } from './angularforms/ngrxforms/reducers/userReducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './angularforms/ngrxforms/effects/user.effects';
import { myUserReducer } from './angularforms/ngrxforms/reducers/user.reducer';
import { DateformatPipe } from './custompipes/dateformat.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const APP_CONFIG = Object.freeze({
  apiURL: 'http://localhost:5000',
  isTest: true
 });

 export const APP_CONFIG_TOKEN = new InjectionToken<any>('AppConfig')

@NgModule({ declarations: [
        AppComponent,
       // EventsComponent,
        SidemenuComponent,
       // BindingComponent,
       // RepeatloopComponent,
        // DirectivesComponent,
       // HighlightDirective,
       // MouseeventDirective,
       // CardhoverDirective,
       // PipesComponent,
       // AgePipe,
        // ArraysortPipe,
       // RxjsoperatorsComponent,
        // AngularserviceComponent,
       // SearchFilterPipe,
       // UserdialogComponent,
      // ParentComponent,
        // ChildComponent,
       // AngularformsComponent,
       // StaticformsComponent,
       // ReactiveformsComponent,
       // RoutingComponent,
       // UserinfoComponent,
       // ViewComponent,
       // ViewchildComponent,
        SpinnerComponent,
       // HooksComponent,
       // HookchildComponent,
       // ChildoneComponent,
        //AddressComponent,
      //  CompanyComponent,
       // GuardsComponent,
       // ProvidersComponent,
       // LogstatusComponent,
       // NgrxComponent,
        //FormsComponent,
        DateformatPipe,
        //SignalsComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        StoreModule.forRoot({ user: userReducer, users: myUserReducer }, {}),
        EffectsModule.forRoot([UserEffect]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // if we remove this it will take unlimited states
            logOnly: !isDevMode()
        })], providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        HttpusersService, AuthService, UserserviceService,
        { provide: Counter1Service, useClass: Counter2Service },
        { provide: AuthenticateService, useClass: AuthenticateService },
        { provide: FakeauthenticateService, useExisting: AuthenticateService },
        { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
        counterFactory,
        TestService, provideHttpClient(withInterceptorsFromDi()),] })
export class AppModule { }
