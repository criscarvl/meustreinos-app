import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTreinoCadastroComponent } from './ficha-treino-cadastro.component';

describe('FichaTreinoCadastroComponent', () => {
  let component: FichaTreinoCadastroComponent;
  let fixture: ComponentFixture<FichaTreinoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTreinoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaTreinoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
