import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioListaComponent } from './exercicio-lista.component';

describe('ExercicioListaComponent', () => {
  let component: ExercicioListaComponent;
  let fixture: ComponentFixture<ExercicioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
