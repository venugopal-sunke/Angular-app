import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, OnDestroy, AfterContentInit, 
         ContentChild, ElementRef, AfterContentChecked, ViewChild, AfterViewInit, AfterViewChecked
        } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpusersService } from 'src/app/services/httpusers.service';

@Component({
  selector: 'app-hookchild',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnChanges, OnInit, DoCheck, OnDestroy, 
AfterContentInit, AfterContentChecked {
  @Input() hookData: string='';

  private subscriptionArr : Subscription;
  @ContentChild('userHeadingh1') userHeading : ElementRef;

  constructor(
    private httpUserService: HttpusersService,
  ){}

  ngOnInit(): void {
    console.log('oninit is called');
    this.subscriptionArr = this.httpUserService.getAllUsersData().subscribe((data: any)=>{
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
     console.log("ngOnChanges Testing",changes);
    // console.log(changes['hookData']['currentValue']);
  }

  ngDoCheck(): void {
    console.log("Do check is called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called");
    console.log(this.userHeading.nativeElement.outerText);
  }

  ngAfterContentChecked(): void {  
    console.log("ngAfterContentChecked is called");
    //console.log(this.userHeading.nativeElement.outerText);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called");
    this.subscriptionArr.unsubscribe();
    console.log(this.subscriptionArr)
  }
}
