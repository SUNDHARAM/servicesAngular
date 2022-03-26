import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateutilityComponent } from './dateutility.component';

describe('DateutilityComponent', () => {
  let component: DateutilityComponent;
  let fixture: ComponentFixture<DateutilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateutilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateutilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
