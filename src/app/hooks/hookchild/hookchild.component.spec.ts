import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookchildComponent } from './hookchild.component';

describe('HookchildComponent', () => {
  let component: HookchildComponent;
  let fixture: ComponentFixture<HookchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
