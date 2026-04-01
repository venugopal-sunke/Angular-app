import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatch } from '../validators/passwordMatch';
import { CommonModule } from '@angular/common';
import { StaticformsComponent } from './staticforms/staticforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@Component({
    selector: 'app-angularforms',
    templateUrl: './angularforms.component.html',
    styleUrls: ['./angularforms.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, StaticformsComponent, ReactiveformsComponent]
})
export class AngularformsComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.loginForm = this.formBuilder.group({
     email: new FormControl('',[
       Validators.required,
       Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),
     ]),

     password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
     ]),

     confirm_password: new FormControl('',[
       Validators.required,
       // this.confirmPasswordValidation.bind(this),
     ]),
    },
    {
      validators: passwordMatch("password","confirm_password")
    }
    )
  }

  // confirmPasswordValidation() {
  //   let self = this;
  //   let password = self?.loginForm?.get('password');
  //   let confirmpassword = self?.loginForm?.get('confirm_password');
  //   if (password?.value == confirmpassword?.value) {
  //     return null;
  //   } else {
  //     return { confirmPasswordValidators: true };
  //   }
  // }

  ngOnInit(): void {
    
  }

  submitted: boolean = false;
  submitLogin(){
    this.submitted = true;
    if(this.loginForm.valid && (this.loginForm.get('password').value === this.loginForm.get('confirm_password').value)){
      console.log('Form is valid',this.loginForm.value);
    }else{
      console.log('Form is not valid')
    }
  }

}
