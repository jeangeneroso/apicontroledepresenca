import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationexclusionDialogComponent } from './confirmationexclusion-dialog.component';

describe('ConfirmationexclusionDialogComponent', () => {
  let component: ConfirmationexclusionDialogComponent;
  let fixture: ComponentFixture<ConfirmationexclusionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationexclusionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationexclusionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
