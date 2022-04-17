import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BACComponent } from './bac.component';

describe('BACComponent', () => {
  let component: BACComponent;
  let fixture: ComponentFixture<BACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
