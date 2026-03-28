import { Injectable } from '@angular/core';

@Injectable()

export class Counter3Service {

  constructor() { }

  public counter: number = 0;

  public incrCounter(): number {
    return this.counter+=3;
  }

  public decrCounter(): number {
    return this.counter-=3;
  }
}
