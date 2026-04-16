import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-reactiveforms',
    templateUrl: './reactiveforms.component.html',
    styleUrls: ['./reactiveforms.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
  })
export class ReactiveformsComponent implements OnInit{

  studentRegisterForm : FormGroup;
  studentRegisterFormObject: any = {};
  empForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.studentRegisterForm = this.formBuilder.group({
      'firstName' : new FormControl('',[
                     Validators.required,
                     Validators.minLength(5),
                     Validators.pattern('^[a-zA-Z0-9-_]+$'),
                    ]),
      'lastName'  : new FormControl('',[Validators.required,
                    Validators.pattern('^[a-zA-Z0-9-_]+$'),
                    ]),
      'email'     : new FormControl('',[
                     Validators.required,
                     Validators.minLength(5)
                    ]),
      'mobileNum' : new FormControl('',[
                     Validators.required,
                     Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
                    ]),
    });

    this.empForm = this.formBuilder.group({
       employees: this.formBuilder.array([])
    })

  }

  get employeesaa():FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.formBuilder.group({
      firstName: '',
      lastName: '',
      skills: this.formBuilder.array([]),
    });
  }
  addEmployee(){
    this.employeesaa.push(this.newEmployee());
  }

  removeEmployee(index: number){
    this.employeesaa.removeAt(index);
  }

  employeeSkills(empIndex: number){
    return this.employeesaa.at(empIndex).get('skills') as FormArray;
  }

  newEmployeeSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      experience: ''
    })
  }

  addSkill(empIndex: number){
    this.employeeSkills(empIndex).push(this.newEmployeeSkill())
  };

  removeSkill(empIndex: number, skillIndex: number){
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  ngOnInit(): void {
    
  }

  resetform(){
         this.studentRegisterForm.reset();
      // this.studentRegisterForm.reset({
      //   firstName: {value: 'First Name', disabled: true}
      // })
  }

  studentForm(){
    //Get Entire form values in one go
     // console.log("Hi:::::",this.studentRegisterForm.value);

    //Get specific form controlvalue by using the below method
    // console.log("Hello:::",this.studentRegisterForm.get('lastName').value);

    //Value changes . We can listen to form value changes
	    //   this.studentRegisterForm.valueChanges.subscribe(data => {
	    //     console.log("Value changes",data);
	    //  });


	//Checking the form states
        //We can also keep some conditions while submitting the form
	     /*if(this.studentRegisterForm.valid){
	        console.log("Form is valid");
	     }

	     if(this.studentRegisterForm.pending){
	        console.log("Form is pending");
	     }*/  

		 /*console.log("valid",this.studentRegisterForm.valid); 
		 console.log("invalid",this.studentRegisterForm.invalid); 
		 console.log("pending",this.studentRegisterForm.pending);
		 console.log("pristine",this.studentRegisterForm.pristine);
		 console.log("dirty",this.studentRegisterForm.dirty);
		 console.log("touched",this.studentRegisterForm.touched);
		 console.log("untouched",this.studentRegisterForm.untouched);*/
  }

  onSubmit(){
    
  }

}
