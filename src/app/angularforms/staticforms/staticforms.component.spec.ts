import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticformsComponent } from './staticforms.component';

describe('StaticformsComponent', () => {
  let component: StaticformsComponent;
  let fixture: ComponentFixture<StaticformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
