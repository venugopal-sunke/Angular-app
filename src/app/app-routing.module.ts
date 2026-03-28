import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { BindingComponent } from './binding/binding.component';
import { RepeatloopComponent } from './repeatloop/repeatloop.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { AngularserviceComponent } from './angularservice/angularservice.component';
//import { AuthGuard } from './guards/auth.guard';
import { authGuard } from './guards/auth.guard';
import { ParentComponent } from './communication/parent/parent.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { RoutingComponent } from './routing/routing.component';
import { UserinfoComponent } from './routing/userinfo/userinfo.component';
import { ViewComponent } from './view/view.component';
import { HooksComponent } from './hooks/hooks.component';
import { AddressComponent } from './routing/address/address.component';
import { CompanyComponent } from './routing/company/company.component';
import { GuardsComponent } from './guards/guards.component';
import { authChildGuard } from './guards/auth.childGuard';
import { authDeactivateGuard } from './guards/auth.deactivateGuard';
import { authResolveGuard } from './guards/auth.resolveGuard';
import { ProvidersComponent } from './providers/providers.component';
import { NgrxComponent } from './ngrx/ngrx.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'repeatloop',
    component: RepeatloopComponent,
    data: {sidemenu: true, sideMenu: 'details'},

  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'rxjsoperators',
    component: RxjsoperatorsComponent
  },
  {
    path: 'services',
    component: AngularserviceComponent,
  },
  {
    path: 'communication',
    component: ParentComponent,
  },
  {
    path: 'angularforms',
    component: AngularformsComponent
  },
  {
    path: 'routing',
    component: RoutingComponent
  },
  {
    path: 'userinfo/:id',
    component: UserinfoComponent,
    children: [
      //If we want the first tab to be in active state enable the below path
      //{ path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent } 
    ]
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: 'guards',
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
 // canActivate: [()=> inject(MainService).isUserLoggedIn()],
    canDeactivate: [authDeactivateGuard],
    resolve: {
         userData: authResolveGuard
    },
    component: GuardsComponent,
    children: [
      //If we want the first tab to be in active state enable the below path
      //{ path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent } 
    ]
  },
  {
    path: 'dependencyproviders',
    component: ProvidersComponent
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  },
  {
    path: '**',
    redirectTo: 'events'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
