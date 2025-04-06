import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioCadastroComponent } from './exercicio-cadastro.component';

describe('ExercicioCadastroComponent', () => {
  let component: ExercicioCadastroComponent;
  let fixture: ComponentFixture<ExercicioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
