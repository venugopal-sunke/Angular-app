import { Injectable } from '@angular/core';

@Injectable()

export class Counter2Service {

  constructor() { }

  public counter: number = 0;

  public incrCounter(): number {
    return this.counter+=2;
  }

  public decrCounter(): number {
    return this.counter-=2;
  }
}
