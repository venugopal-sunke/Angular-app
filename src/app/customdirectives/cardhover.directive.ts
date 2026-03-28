import { Directive, HostListener, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardhover]'
})
export class CardhoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.card-outline-primary') private ishovering: boolean = false;

  @HostListener('mouseenter') MouseEnter($event: Event) {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
    this.ishovering = true;
   }
 
   @HostListener('mouseleave') MouseLeave() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');
    this.ishovering = false;
   }

}
