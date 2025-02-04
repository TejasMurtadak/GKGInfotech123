import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetqPopupComponent } from './getq-popup.component';

describe('GetqPopupComponent', () => {
  let component: GetqPopupComponent;
  let fixture: ComponentFixture<GetqPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetqPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetqPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
