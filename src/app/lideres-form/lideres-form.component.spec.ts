import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LideresFormComponent } from './lideres-form.component';

describe('LideresFormComponent', () => {
  let component: LideresFormComponent;
  let fixture: ComponentFixture<LideresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LideresFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LideresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
