import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationincluidDialogComponent } from './confirmationincluid-dialog.component';

describe('ConfirmationincluidDialogComponent', () => {
  let component: ConfirmationincluidDialogComponent;
  let fixture: ComponentFixture<ConfirmationincluidDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationincluidDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationincluidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
