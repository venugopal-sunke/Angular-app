import { Directive, HostListener, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[appMouseevent]',
    standalone: true
})
export class MouseeventDirective implements OnInit{
 
  constructor(private el: ElementRef) { }
  

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = '#fff';
  }

 @HostBinding('class.mouseEventStyling')private ishovering : boolean = false;
 
  @HostListener('mouseenter') MouseEnter($event: Event) {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.ishovering = true;
  }

  @HostListener('mouseleave') MouseLeave($event: Event) {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = '#fff';
    this.ishovering = false;
  }

}
