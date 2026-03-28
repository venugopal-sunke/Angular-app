import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatloopComponent } from './repeatloop.component';

describe('RepeatloopComponent', () => {
  let component: RepeatloopComponent;
  let fixture: ComponentFixture<RepeatloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatloopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
