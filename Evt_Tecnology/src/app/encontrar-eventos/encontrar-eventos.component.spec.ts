import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrarEventosComponent } from './encontrar-eventos.component';

describe('EncontrarEventosComponent', () => {
  let component: EncontrarEventosComponent;
  let fixture: ComponentFixture<EncontrarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncontrarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncontrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
