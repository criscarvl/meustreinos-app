import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCadastroComponent } from './treino-cadastro.component';

describe('TreinoCadastroComponent', () => {
  let component: TreinoCadastroComponent;
  let fixture: ComponentFixture<TreinoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
