import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '../angularforms/ngrxforms/actions/user.action';

@Component({
    selector: 'app-ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.css'],
    standalone: false
})
export class NgrxComponent implements OnInit{

  constructor(private store: Store<any>){}
   mydata: any
   ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe((data: any)=>{
      console.log(data,'store')
    this.mydata = data.users;
    });
   }

   trackByUserId(index: number, user: any): number {
     return user.id;
   }
}
