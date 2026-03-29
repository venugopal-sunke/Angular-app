import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css'],
    standalone: false
})
export class SidemenuComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private userService: UserserviceService
  ){}

  @ViewChild('sideMenu') sideMenu?: ElementRef

  ngOnInit(){

  }

  ngAfterViewInit(): void {
    this.userService.setSideMenu({template: this.sideMenu});
  }

  ngOnDestroy(): void {
    this.userService.sideMenu$.next(null);
  }

}
