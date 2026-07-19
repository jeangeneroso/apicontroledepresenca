import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhadoformListComponent } from './compartilhadoform-list.component';

describe('CompartilhadoformListComponent', () => {
  let component: CompartilhadoformListComponent;
  let fixture: ComponentFixture<CompartilhadoformListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartilhadoformListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartilhadoformListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
