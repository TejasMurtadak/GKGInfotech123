import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobdevDialogComponent } from './mobdev-dialog.component';

describe('MobdevDialogComponent', () => {
  let component: MobdevDialogComponent;
  let fixture: ComponentFixture<MobdevDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobdevDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobdevDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
