import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { UserPipe, comments, userInfo } from '../models/datamodel';
import { HttpusersService } from '../services/httpusers.service';
import { MatDialog } from '@angular/material/dialog';
import { UserdialogComponent } from './userdialog/userdialog.component';

@Component({
  selector: 'app-angularservice',
  templateUrl: './angularservice.component.html',
  styleUrls: ['./angularservice.component.css']
})
export class AngularserviceComponent implements OnInit {

  constructor(
    private userService: UserserviceService,
    private httpUser: HttpusersService,
    public dialog: MatDialog,
  ){}

  users: Array<UserPipe> = [];
  searchData: string = "";
  userInfo: Array<userInfo> = [];
  userComments: Array<comments> = [];
  p: number = 1;

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
     
    // this.httpUser.getAllUsersData().subscribe((data: any)=>{
    //  // console.log(data,'test')
    //   this.userInfo = data;
    // });

    this.httpUser.getAllUsersData().subscribe({
      next: (data)=>{
        if(data){
          console.log(data,'test');
          this.userInfo = data;
        }
      },

      error: (data)=>{
        console.log(data,'eererer venugpoal')
        
      }
    })

    this.httpUser.getUserComments().subscribe((data: any)=>{
      //console.log(data,'usercomments');
       this.userComments = data;
    });
  }

  showUserInfo(userData: userInfo){
     //console.log('ddddd',userData)
     const dialogRef=this.dialog.open(UserdialogComponent,{
       width: '40%',
       data: userData,
     });

     dialogRef.afterClosed().subscribe((result)=>{
         if (result) this.ngOnInit();
     });
  }

}
