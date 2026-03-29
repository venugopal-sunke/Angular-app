import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpusersService } from '../services/httpusers.service';
import { userInfo } from '../models/datamodel';
import { Observable, Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.css'],
    standalone: false
})
export class RoutingComponent implements OnInit, OnDestroy{

  constructor(
    private userService: HttpusersService,
    private spinnerService: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userInfo: UserserviceService,
  ){}

  usersData: Array<userInfo> = [];

  productSubscription: Subscription | undefined;

  ngOnInit(): void {
    //  this.userService.getAllUsersData().subscribe((data: any)=> {
    //     this.usersData = data;

    //     const message = data
    //           ? 'Successfully received data'
    //           : 'The resource creation request is successfully denied';
    //         this.spinnerService.openSnackBar(message);
    //        // this.dialog.close(true);

    //  });

     this.productSubscription = this.userService.getAllUsersData().subscribe((data:any)=>{
         this.usersData = data;

             const message = data
              ? 'Successfully received data'
              : 'The resource creation request is successfully denied';
            this.spinnerService.openSnackBar(message);
           // this.dialog.close(true);
     });
  }

  userRoute(testdata: any){
    this.router.navigate(['/userinfo'+`/${testdata.id}`],{
      relativeTo: this.activatedRoute,
    });
    this.userService.setData(testdata);
  }

  getCSSClasses(info: any){
     return {
      'class1': info.id == 5 || info.id == 8,
      'class2': info.id == 2
     }
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
