import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-viewchild',
    templateUrl: './viewchild.component.html',
    styleUrls: ['./viewchild.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class ViewchildComponent {

  constructor(){}
  data: string = "Data is coming from child component";

   get test(){
    return this.data;
  }

}
