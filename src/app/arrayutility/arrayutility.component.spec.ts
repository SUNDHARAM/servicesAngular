import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayutilityComponent } from './arrayutility.component';

describe('ArrayutilityComponent', () => {
  let component: ArrayutilityComponent;
  let fixture: ComponentFixture<ArrayutilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayutilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayutilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
