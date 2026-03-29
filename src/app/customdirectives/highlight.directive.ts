import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: false
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
  el.nativeElement.style.backgroundColor = '#ccc';
  el.nativeElement.style.padding = '8px';
  el.nativeElement.style.color = 'red';
  el.nativeElement.style.border = '2px solid #000';
}
}
