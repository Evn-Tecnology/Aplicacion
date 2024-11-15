import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNologComponent } from './header-nolog.component';

describe('HeaderNologComponent', () => {
  let component: HeaderNologComponent;
  let fixture: ComponentFixture<HeaderNologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNologComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
