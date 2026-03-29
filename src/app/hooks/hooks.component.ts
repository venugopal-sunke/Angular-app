import { Component, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-hooks',
    templateUrl: './hooks.component.html',
    styleUrls: ['./hooks.component.css'],
    standalone: false
})
export class HooksComponent implements AfterViewInit, AfterViewChecked{

  hookMsg: string = 'Implementing ngOnChanges Life Cycle Hook';
  i: number = 0;

  @ViewChild('heading2') heading2 : ElementRef;

  increment(){
    this.i++;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',this.heading2.nativeElement.outerText);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called',this.heading2.nativeElement.outerText);
  }

}
