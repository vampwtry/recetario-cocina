import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTyPComponent } from './agregar-ty-p.component';

describe('AgregarTyPComponent', () => {
  let component: AgregarTyPComponent;
  let fixture: ComponentFixture<AgregarTyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTyPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarTyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
