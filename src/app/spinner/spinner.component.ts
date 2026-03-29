import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css'],
    standalone: false
})
export class SpinnerComponent implements OnInit {
   constructor(
    public dialogRef: MatDialogRef<SpinnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ){}

   ngOnInit(): void {
     
   }
}
