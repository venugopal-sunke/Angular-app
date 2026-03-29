import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserserviceService } from '../services/userservice.service';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css'],
    standalone: false
})
export class DirectivesComponent implements OnInit {

  condition: boolean = true;
  show: boolean = true;
  myvisible: boolean = false;
  displayMessage: string = "hideme";
  disabled = false;
  checked = false;
  color: string = "red";
  part: any;
  visible: boolean = true;
  showMsg: string = 'showme';
  isUserLoggedin: boolean = true;
  selectedCountry: string= "India";
  txtColor:boolean = true;
  bgColor : string='yellow';
  testVal: string='';
  h2Color: string = 'grey';
  h3Color: string = 'yellow';
  myStyle: object = {
    color: '#fff',
    background: 'green',
    border: '2px solid red',
    padding: '5px 5px',
  }
  hasError: boolean = false;

  constructor(
    private userService: UserserviceService
  ){}

  ngOnInit(): void {
    this.userService.countValue$.subscribe((data: any)=>{
       this.testVal = data;
    });
  }

    changed(event: MatSlideToggleModule){
      this.myvisible = !this.myvisible;
      this.displayMessage = this.myvisible ? "showme" : "hideme";
    }

    mytoggle(event: any){
      //console.log("failed:::",event.source["_elementRef"].nativeElement.parentNode.querySelector("p"));
      this.part = event.source["_elementRef"].nativeElement.parentNode.querySelector("p");
       if(this.part.classList.contains("showme")){
        this.part.classList.remove("showme");
        this.part.classList.add("hideme");
       } else {
        this.part.classList.remove("hideme");
        this.part.classList.add("showme");
       }
   }

   toggleAction() {
    this.visible = !this.visible;
    this.showMsg = this.visible ? "showme" : "hideme";
  }

  details: Array<any> = [
    {
       name: 'Krishna', designation: 'UI Developer', tech: [{
          technology: 'html',
          style: 'css',
          role: 'Software Engineer'
       }]
    },
    {
       name: 'Kiran', designation: 'UI Designer', tech: [{
          technology: 'Javascript',
          style: 'Jquery',
          role: 'System Analyst'
       }]
    },
    {
        name: 'Hari', designation: 'Java Developer', tech: [{
           technology: 'Java',
           style: 'Hybris Developer',
           role: 'Consultant'
        }]
    }
  ];

  selectedIndex: number = 0 || null;
  setActive(event: Event, i: number){
    this.selectedIndex = i;
  }

}
