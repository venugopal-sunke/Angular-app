import { TestBed } from '@angular/core/testing';

import { HttpusersService } from './httpusers.service';

describe('HttpusersService', () => {
  let service: HttpusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
