import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLogueadoComponent } from './principal-logueado.component';

describe('PrincipalLogueadoComponent', () => {
  let component: PrincipalLogueadoComponent;
  let fixture: ComponentFixture<PrincipalLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalLogueadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
