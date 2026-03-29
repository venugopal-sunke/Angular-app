import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userInfo } from 'src/app/models/datamodel';
import { HttpusersService } from 'src/app/services/httpusers.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css'],
    standalone: false
})
export class UserinfoComponent implements OnInit, OnDestroy{

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: HttpusersService,
    private router: Router,
    private userInfoService: UserserviceService,
  ){}

  userData:any = {};
 
  ngOnInit(): void {
    //let id = this.activatedRoute.snapshot.params['id'];
    // this.userService.getuserinfo(id).subscribe((info: any)=> {
    //    this.userData = info;
    // });

    let u = this.userService.getData();
    this.userData = JSON.parse(u);
  }

  moveBack(){
    this.router.navigate(['../../routing'],{relativeTo: this.activatedRoute});
    //history.back();
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('roleData');
  }
}
