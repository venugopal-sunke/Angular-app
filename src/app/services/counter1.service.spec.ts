import { TestBed } from '@angular/core/testing';

import { Counter1Service } from './counter1.service';

describe('Counter1Service', () => {
  let service: Counter1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
