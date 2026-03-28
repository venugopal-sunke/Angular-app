import { Injectable } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  start(message?: any): MatDialogRef<SpinnerComponent> {
    const dialogRef = this.matDialog.open(SpinnerComponent, {
      disableClose: true,
      data: message === '' || message === undefined ? 'Loading..' : message
    });

    return dialogRef;
  }

  stop(ref: MatDialogRef<SpinnerComponent>): void {
    ref.close();
  }

  //code for snack bar alert message
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  openSnackBar(
    message: string,
    hPosition?: MatSnackBarHorizontalPosition,
    vPosition?: MatSnackBarVerticalPosition,
  ){
     this.snackBar.open(message, '', {
       horizontalPosition: hPosition ? hPosition : this.horizontalPosition,
       verticalPosition: vPosition ? vPosition : this.verticalPosition,
       duration: this.durationInSeconds * 1000,
     });
  }
}
