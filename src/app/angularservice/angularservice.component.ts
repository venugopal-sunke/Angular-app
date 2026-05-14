import { Component, OnInit, inject } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { UserPipe, comments, userInfo } from '../models/datamodel';
import { HttpusersService } from '../services/httpusers.service';
import { MatDialog } from '@angular/material/dialog';
import { UserdialogComponent } from './userdialog/userdialog.component';
import { CommonModule } from '@angular/common';
import { AgePipe } from "../custompipes/age.pipe";
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../custompipes/search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-angularservice',
    templateUrl: './angularservice.component.html',
    styleUrls: ['./angularservice.component.css'],
    standalone: true,
    imports: [CommonModule, AgePipe, FormsModule, SearchFilterPipe, NgxPaginationModule],
})
export class AngularserviceComponent implements OnInit {

  // constructor(
  //   private userService: UserserviceService,
  //   private httpUser: HttpusersService,
  //   public dialog: MatDialog,
  // ){}

  private userService = inject(UserserviceService);
  private httpUser = inject(HttpusersService);
  public dialog = inject(MatDialog);

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
      
    });

    this.httpUser.getUserComments().subscribe((data: any)=>{
      //console.log(data,'usercomments');
       this.userComments = data;
    });
  }

  // Generate PDF report of users data
  generatePDF() {
     this.httpUser.getAllUsersData().subscribe({
      next: (data)=>{
       const pdf = new jsPDF();

       pdf.setFontSize(18);
       pdf.text('Users Report', 14, 20);

       let y = 40;

          autoTable(pdf, {
        startY: 30,
        head: [
          ['ID', 'Name', 'Username', 'Email', 'Phone']
        ],
        body: data.map((user: userInfo) => [
          user.id,
          user.name,
          user.username,
          user.email,
          user.phone
        ])
      });

      pdf.save('users.pdf');
      },

      error: (data)=>{
        console.log(data,'eererer venugpoal')
      }
      
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
