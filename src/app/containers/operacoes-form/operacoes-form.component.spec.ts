import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesFormComponent } from './operacoes-form.component';

describe('OperacoesFormComponent', () => {
  let component: OperacoesFormComponent;
  let fixture: ComponentFixture<OperacoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacoesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
