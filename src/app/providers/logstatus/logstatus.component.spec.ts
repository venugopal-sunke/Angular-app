import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogstatusComponent } from './logstatus.component';

describe('LogstatusComponent', () => {
  let component: LogstatusComponent;
  let fixture: ComponentFixture<LogstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
