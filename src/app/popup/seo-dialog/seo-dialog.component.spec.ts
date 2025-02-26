import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDialogComponent } from './seo-dialog.component';

describe('SeoDialogComponent', () => {
  let component: SeoDialogComponent;
  let fixture: ComponentFixture<SeoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
