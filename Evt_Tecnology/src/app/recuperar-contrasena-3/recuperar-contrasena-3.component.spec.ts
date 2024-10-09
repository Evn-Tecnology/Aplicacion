import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContrasena3Component } from './recuperar-contrasena-3.component';

describe('RecuperarContrasena3Component', () => {
  let component: RecuperarContrasena3Component;
  let fixture: ComponentFixture<RecuperarContrasena3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarContrasena3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarContrasena3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
