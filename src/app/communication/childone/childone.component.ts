import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent {

  @Input() title: any = [];

  // toggleContent(event: Event, title: any) {
  //   let ele = (event.target as HTMLElement).nextElementSibling;
    
  //   let idEle = ele.id;
  //   let className = document.getElementsByClassName('mycontent');

  //   let x = document.getElementById(idEle);

  //   if (x.style.display == 'none') {
  //     for (let i = 0; i < className.length; i++) {
  //       className[i].setAttribute('style', 'display: none');
  //     }
  //     x.style.display = 'block';
  //   } else {
  //     x.style.display = 'none';
  //   }
  // }

  visible: boolean = false;
  toggleContent(){
    this.visible = !this.visible;
  }

}
