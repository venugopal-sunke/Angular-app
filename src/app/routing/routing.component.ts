import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpusersService } from '../services/httpusers.service';
import { userInfo } from '../models/datamodel';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.css'],
    standalone: true,
    imports: [CommonModule, MatTooltip] 
})
export class RoutingComponent implements OnInit, OnDestroy{

  private userService = inject(HttpusersService);
  private spinnerService = inject(SpinnerService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

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
