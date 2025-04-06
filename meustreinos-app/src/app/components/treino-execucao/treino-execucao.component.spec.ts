import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoExecucaoComponent } from './treino-execucao.component';

describe('TreinoExecucaoComponent', () => {
  let component: TreinoExecucaoComponent;
  let fixture: ComponentFixture<TreinoExecucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinoExecucaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
