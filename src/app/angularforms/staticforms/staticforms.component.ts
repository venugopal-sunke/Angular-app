import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-staticforms',
    templateUrl: './staticforms.component.html',
    styleUrls: ['./staticforms.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class StaticformsComponent implements OnInit {
  constructor(){}

  firstname: string = '';
  lastname: string = ''
  cities: Array<string> = ['Delhi','Bangalore','Hyderabad','Mumbai','Kolkata','Trivandrum'];
  city: string = '';
  gender: string = '';
  terms: boolean = false;

  ngOnInit(){

  }

  personalForm(formValue: NgForm){
    console.log("Formvalues",formValue.value);
  }

  //Form reset method both below methods are valid
  resetForm(formValue: NgForm){
    //formValue.reset();
    formValue.resetForm();
 }

 //Form set values methods
 setFormValue(formValue: NgForm){
    let loginDetails = {
    firstname: 'Venugopal',
    lastname: 'Sunke',
    city: 'kolkata',
    gender: 'Female',
    terms: true,
  };

  formValue.setValue(loginDetails);
}
}
