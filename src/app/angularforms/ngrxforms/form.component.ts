import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateEmail, updateMobile, updateName } from './actions/actionCreater';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: false
})
export class FormsComponent implements OnInit{

    private store = inject(Store);

    ngOnInit(): void {}

    editName(inputvalue:string){
        this.store.dispatch(updateName({name: inputvalue}));
    }
    editEmail(inputValue:string){
        this.store.dispatch(updateEmail({email: inputValue}));
    }
    editMobile(inputValue:string){
        this.store.dispatch(updateMobile({mobile: inputValue}));
    }
}