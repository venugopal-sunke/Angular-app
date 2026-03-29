import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css'],
    standalone: false
})
export class BindingComponent implements OnInit {

  constructor(){}

  interpolationTitle:string = "This is interpolation example";
  imageUrl: string="assets/images/slider.jpg";
  btnStatus : boolean = false;
  changeText: string = "";
  username: string = "";
 
  ngOnInit(): void {
    
  }

  changeTitle(){
     this.changeText="Event binding";
  }
}
