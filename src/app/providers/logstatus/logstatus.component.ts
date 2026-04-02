import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { FakeauthenticateService } from 'src/app/services/fakeauthenticate.service';


@Component({
    selector: 'app-logstatus',
    templateUrl: './logstatus.component.html',
    styleUrls: ['./logstatus.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class LogstatusComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthenticateService, private fakeAuthService: FakeauthenticateService){}
    ngOnInit(): void {
      
    }

    logIn(){
      this.isLoggedIn = true;
      this.authService.isLoggedIn = true;
    }

    logOut(){
      this.isLoggedIn = false;
      this.authService.isLoggedIn = false;
    }

    getLogStatus(){
        console.log(this.fakeAuthService.isLoggedIn,'useExisting')
    }
}
