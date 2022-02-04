import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalconComponent } from './rentalcon.component';

describe('RentalconComponent', () => {
  let component: RentalconComponent;
  let fixture: ComponentFixture<RentalconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
