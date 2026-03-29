import { Component, inject, OnInit } from '@angular/core';
import { Menu } from './models/datamodel';
import { Store } from '@ngrx/store';
import { getUsers } from './angularforms/ngrxforms/actions/user.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {

  constructor(){}

  private store = inject(Store);

  title = 'angularApp';
  projectTitle: string = "My Angular Application";

  menuList: Array<Menu> = [
    {name: 'Events', link: 'events'},
    {name: 'Directives', link: 'directives'},
    {name: 'Repeat Loop', link: 'repeatloop'},
    {name: 'Data Binding', link: 'binding'},
    {name: 'Pipes', link: 'pipes'},
    {name: 'Rxjs Operators', link: 'rxjsoperators'},
    {name: 'Services', link: 'services'},
    {name: 'Component Communication', link: 'communication'},
    {name: 'Angular Forms', link: 'angularforms'},
    {name: 'Routing', link: 'routing'},
    {name: 'View', link: 'view'},
    {name: 'Life Cycle Hooks', link: 'hooks'},
    {name: 'Guards', link: 'guards'},
    {name: 'DI Providers', link: 'dependencyproviders'},
    {name: 'Ngrx', link: 'ngrx'}
  ];

  setActive(event: Event,link: string){}

  ngOnInit(): void {
    this.store.select('user').subscribe((data: any)=> {
      console.log(data,'store data');
    });

    // this.store.dispatch(getUsers());
    // this.store.select('users').subscribe((data: any)=>{
    //   console.log(data,'Ngrx Effects');
    // });
  }
}
