import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
    standalone: false
})
export class ParentComponent implements OnInit, AfterViewInit{

  constructor(
    private userService: UserserviceService,
  ){}

  parentMsg: string=" This is the message coming from parent component";
  contentData: Array<any> = [];
  childVal: string = '';

  @ViewChild('childCommunication') childCommunication: ChildComponent

  ngOnInit(): void {
    this.contentData = this.userService.angularDataContent();
  }
  
  ngAfterViewInit(): void{
    // this.childVal = this.childCommunication.logFoo1();
  }

  info: string = '';
  childMsg(data: string){
    this.info = data;
  }

  myData: any = [];
  //selectedIndex: string = 'all';
  selectedIndex: string = '';
  myFunc(event: Event, arg: string){
    this.myData.length = 0;
    this.selectedIndex = arg;
    this.userService.angularDataContent().filter((ele: any)=>{
        this.myServiceArg(ele,arg);
    })
  }

  myServiceArg(ele: any, arg: string){
    if(Array.isArray(ele.sessions)){
      if(arg == 'all'){
        for(let data of ele.sessions){
           this.myData.push(data);
        }
      }else if(arg == 'advanced' || 'intermediate' || 'beginner'){
         for(let data of ele.sessions){
          if(data.level.toLowerCase() == arg) {
              this.myData.push(data);
           }
         }
      }
    }
  }
}
