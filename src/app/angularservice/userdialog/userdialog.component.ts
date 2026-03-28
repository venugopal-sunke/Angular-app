import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('1250ms', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))])
    ]
    )
  ]
})
export class UserdialogComponent implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataq: any
  ){}

  userDetails: any;

  ngOnInit(): void {
    this.userDetails = this.dataq;
  }

}
