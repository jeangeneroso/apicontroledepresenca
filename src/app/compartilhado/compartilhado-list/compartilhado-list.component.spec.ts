import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhadoListComponent } from './compartilhado-list.component';

describe('CompartilhadoListComponent', () => {
  let component: CompartilhadoListComponent;
  let fixture: ComponentFixture<CompartilhadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartilhadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartilhadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
