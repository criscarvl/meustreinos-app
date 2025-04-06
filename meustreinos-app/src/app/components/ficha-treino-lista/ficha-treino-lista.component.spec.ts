import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTreinoListaComponent } from './ficha-treino-lista.component';

describe('FichaTreinoListaComponent', () => {
  let component: FichaTreinoListaComponent;
  let fixture: ComponentFixture<FichaTreinoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTreinoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaTreinoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
