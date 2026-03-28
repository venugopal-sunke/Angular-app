import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  constructor(){}
  data: string = "Data is coming from child component";

   get test(){
    return this.data;
  }

}
