import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDialogComponent } from './digital-dialog.component';

describe('DigitalDialogComponent', () => {
  let component: DigitalDialogComponent;
  let fixture: ComponentFixture<DigitalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
