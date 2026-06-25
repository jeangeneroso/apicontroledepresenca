import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresFormComponent } from './colaboradores-form.component';

describe('ColaboradoresFormComponent', () => {
  let component: ColaboradoresFormComponent;
  let fixture: ComponentFixture<ColaboradoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradoresFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
