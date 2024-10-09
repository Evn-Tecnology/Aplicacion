import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarConstrasena2Component } from './recuperar-constrasena-2.component';

describe('RecuperarConstrasena2Component', () => {
  let component: RecuperarConstrasena2Component;
  let fixture: ComponentFixture<RecuperarConstrasena2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarConstrasena2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarConstrasena2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
