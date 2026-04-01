import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, MatCheckbox]
})
export class EventsComponent implements OnInit {

  public clickData: string = '';
  public doubleclickdata: string = "";
  public count: number = 0;
  menuItem: any = null;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.userService.sideMenu$.subscribe((data: any) => {
      this.menuItem = data;
    })
  }

  clickEvent(event: Event, a: number) {
    console.log("Event", event);
    console.log('a', a);
    this.clickData = "Click Event is triggering";
  }

  doubleClick() {
    this.doubleclickdata = "Double click event is triggering";
  }

  increment() {
    this.count++;
  }

  decrement() {
    (this.count == 0) ? alert("count cannot be less than  0") : this.count--;
  }

  countVal: number=0;
  myFunction(){
    this.countVal++;
    this.userService.setCountValue(this.countVal);
  }

  ftemperature: number = 0;
  ctemperature: number = 0;

onKey(value: string, tempType: string) {
    if (tempType == 'celsius') {
      this.ftemperature = ((9 / 5) * parseFloat(value)) + 32;
    } else if (tempType == 'farenheit') {
      this.ctemperature = (parseFloat(value) - 32) * (5 / 9);
    }
  }

}
