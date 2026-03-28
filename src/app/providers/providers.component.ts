import { Component, Inject, OnInit } from '@angular/core';
import { Counter1Service } from '../services/counter1.service';
import { APP_CONFIG_TOKEN } from '../app.module';
import { Counter3Service } from '../services/counter3.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit{

  constructor(private counter1: Counter1Service, private counter3: Counter3Service, @Inject(APP_CONFIG_TOKEN) appConfig: any){
    console.log('useValue:::',appConfig);
  }

  ngOnInit(): void {
    
  }

  countVal: number;
  increment(){
    this.countVal = this.counter1.incrCounter();
  }

  decrement(){
    this.countVal = this.counter1.decrCounter();
  }


  updatedVal: number;
  plus(){
    this.updatedVal = this.counter3.incrCounter();
  }

  minus(){
    this.updatedVal = this.counter3.decrCounter();
  }

}
