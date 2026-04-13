import { Component, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList, TemplateRef, inject } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Counter1Service } from '../services/counter1.service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css'],
    standalone: true,
    imports: [ViewchildComponent]
})
export class ViewComponent implements AfterViewInit {

  // constructor(private counter1: Counter1Service,){}

  private counter1 = inject(Counter1Service);

  @ViewChild('headline') headline: ElementRef;

  @ViewChild(ViewchildComponent) childComponent: ViewchildComponent;

  //@ViewChildren('headline') textTags: QueryList<ViewComponent>;
  @ViewChildren('headline') textTags: QueryList<any>;

  childData:string='';

  ngAfterViewInit(): void {
    console.log(this.headline.nativeElement.innerText,'data1212');
   for(let ele of this.textTags){
      console.log(ele.nativeElement.innerText,':::::element');
   }
  }

  getData(){
    //this.childData = this.childComponent.data;
      this.childData = this.childComponent.test;
  }

}
