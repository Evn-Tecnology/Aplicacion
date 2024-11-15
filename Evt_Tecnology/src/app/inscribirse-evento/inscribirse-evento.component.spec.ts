import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirseEventoComponent } from './inscribirse-evento.component';

describe('InscribirseEventoComponent', () => {
  let component: InscribirseEventoComponent;
  let fixture: ComponentFixture<InscribirseEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscribirseEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscribirseEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
