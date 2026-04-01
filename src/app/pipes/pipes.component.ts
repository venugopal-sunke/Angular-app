import { Component, OnInit } from '@angular/core';
import { UserPipe, userInfo } from '../models/datamodel';
import { HttpusersService } from '../services/httpusers.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ArraysortPipe } from '../custompipes/arraysort.pipe';
import { AgePipe } from '../custompipes/age.pipe';
@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.css'],
    standalone: true,
    imports: [CommonModule, ArraysortPipe, AgePipe]
})
export class PipesComponent implements OnInit{

  pipeTitle: string = 'angular pipes';
  rate: number =  0.67;
  users: Array<UserPipe> = [
    {id: 101, name: 'John', city:'delhi', salary: 2, dob: new Date("05/11/1989")},
    {id: 102, name: 'peter', city:'pune', salary: 85000, dob: new Date("05/10/1956")},
    {id: 103, name: 'omid', city:'hyderabad', salary: 145000, dob: new Date("05/10/1998")},
    {id: 104, name: 'kunal', city:'bangalore', salary: 784250, dob: new Date("05/10/1945")}
  ];
  numArray: any = [45,7,98,5,108,2,8];

  constructor(
    private httpUserService: HttpusersService,
  ){}

 // usersData$: Array<userInfo>;
   usersData$: Observable<Array<userInfo>>
  //usersData$: any = [];
  appStatus: Promise<string> | undefined;

  ngOnInit(): void {
    this.usersData$=this.httpUserService.getAllUsersData();

    this.appStatus = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Async pipe is used for handling asynchronous data");
      },5000);
    });
  }

}