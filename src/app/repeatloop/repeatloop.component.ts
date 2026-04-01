import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../app.material';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-repeatloop',
    templateUrl: './repeatloop.component.html',
    styleUrls: ['./repeatloop.component.css'],
    standalone: true,
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class RepeatloopComponent implements OnInit {
  
  addUserForm: FormGroup;
  userData: any = [];
  countryId: number=0;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.addUserForm = this.formBuilder.group({
        username: new FormControl('',[Validators.required]),
        designation: new FormControl('',[Validators.required]),
        skills: new FormControl('',[Validators.required]),
        place: new FormControl('',[Validators.required]),
        experience: new FormControl('',[Validators.required]),
    })
  }

  details = [
    {name: 'John', designation: 'Advisor', place: 'US', experience: 5},
    {name: 'Adam', designation: 'Director', place: 'UK', experience: 6},
    {name: 'Stevenson', designation: 'Cheif Co-Ordinator', place: 'Germany', experience: 7},
    {name: 'Mcgrath', designation: 'Treasurer', place: 'Singapore', experience: 8},
    {name: 'Luke', designation: 'Sales Head', place: 'South Korea', experience: 9}
  ];
  
  products = [
    { name:'kiran', designation:'UI developer', tech:[{
                                                           name:'html',
                                                           style:'css'
                                                       },
                                                       {
                                                          profession: 'Engineer',
                                                          location: 'US'
                                                       }
                                                     ]
    },
    { name:'ravi', designation:'java developer', tech:[{
                                                           name:'java',
                                                           style:'css'
                                                       },
                                                       {
                                                         profession: 'Doctor',
                                                         location: 'Germany'
                                                      }
                                                     ]
     },
    { name:'venu', designation:'dot net developer', tech:[{
                                                           name:'Dotnet',
                                                           style:'Asp'
                                                       },
                                                       {
                                                         profession: 'Psychologist',
                                                         location: 'New York'
                                                      }
                                                     ]
     },
]

countries = [
  {
    id: 1,
    name: 'France',
    cities: ['Paris', 'Marseille', 'Nice'],
  },
  {
    id: 2,
    name: 'Germany',
    cities: ['Hamburg', 'Berlin', 'Munich'],
  },
  {
    id: 3,
    name: 'Italy',
    cities: ['Roma', 'Milan', 'Napoli'],
  },
];

cars = [
  {id: 'audi', name: 'Audi'},
  {id: 'mercedes', name: 'Mercedes'},
  {id: 'bmw', name: 'BMW'},
  {id: 'rollsroyce', name: 'Rolls Royce'},
  {id: 'hyundai', name: 'Hyundai'},
  {id: 'volkaswagen', name: 'Volkaswagen'},
];

selectedCar: string = 'bmw'

  ngOnInit(): void {
    
  }

  addUser(){
    if(this.addUserForm.valid){
      this.userData.push(this.addUserForm.value);
      //this.addUserForm.reset();
    }
  }

  selectVal(countryVal: string){
    this.countryId=parseInt(countryVal);
    if(this.countryId){
       this.callCities(this.countryId);
    }else{
      this.callCities(null);
    }
  }

  cityNames: any = [];

  callCities(id: number){
    if(id >= 0){
      this.cityNames.length = 0;
      for(let i=0; i<this.countries.length; i++){
        if(this.countries[i].id == id){
          //let test = this.countries[i].cities;
          for(let j=0; j<this.countries[i].cities.length; j++){
            this.cityNames.push(this.countries[i].cities[j]);
          }
        }
      }
    }
  }

  users: any = [
    { id: 1, name: 'User A', age: 20 },
    { id: 2, name: 'User B', age: 21 },
    { id: 3, name: 'User C', age: 22 },
  ];

  red: string = 'You are in red zone';
  green: string = 'You are in green zone';
  yellow: string = 'You are in yellow zone';

  deleteRow(rowNum: number){
     this.users.splice(rowNum,1);
  }

  myObject : any = {
    name: 'Charles',
    city: 'Auckland',
    qualification: 'MS',
    country: 'New Zealand'
  }

  isCertsToggle: boolean = true;

  users1: any = [
    { id: 1, name: 'User A', age: 20 },
    { id: 2, name: 'User B', age: 21 },
    { id: 3, name: 'User C', age: 22 },
  ];

  testMyFun(id: number):boolean{
    return id == 2;
  }

}
