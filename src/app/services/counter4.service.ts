import { Injectable } from '@angular/core';

@Injectable()

export class Counter4Service {

  constructor() { }

  public counter: number = 0;

  public incrCounter(): number {
    return this.counter+=4;
  }

  public decrCounter(): number {
    return this.counter-=4;
  }
}
