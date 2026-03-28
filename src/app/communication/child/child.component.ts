import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  constructor(){}

  private cdr = inject(ChangeDetectorRef);

  @Input() parentInfo: string='';
  @Output()
  childData : EventEmitter<string> = new EventEmitter<string>();

  someProperty: string = "Data communication between components";
  message = 'Hello World!';

  ngOnInit(): void {
    
  }

  sendData(){
    this.childData.emit("This data is coming from child component");
  }

  logFoo(){
    console.log("Communication is success");
  }

  logFoo1(){
    return "Accessing child component method";
  }

  updateMessage() {
    // Simulate async update outside Angular's change detection
    setTimeout(() => {
      this.message = 'Message Updated!';
      
      // Without this, Angular may not update the view immediately
      this.cdr.detectChanges();
    }, 2000);
  }

  counterMark = 0;
   incrementMark() {
    setTimeout(() => {
      this.counterMark++;
      console.log('markForCheck incremented:', this.counterMark);
      this.cdr.markForCheck(); // scheduled for next CD cycle
    }, 1000);
  }

}
