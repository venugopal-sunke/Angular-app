import { Injectable } from '@angular/core';

@Injectable()
export class Counter1Service {

  constructor() { }

  public counter: number = 0;

  public incrCounter(): number {
    return this.counter++;
  }

  public decrCounter(): number {
    return this.counter--;
  }
}
