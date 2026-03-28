import { TestBed } from '@angular/core/testing';

import { FakeauthenticateService } from './fakeauthenticate.service';

describe('FakeauthenticateService', () => {
  let service: FakeauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
