import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPasosComponent } from './editar-pasos.component';

describe('EditarPasosComponent', () => {
  let component: EditarPasosComponent;
  let fixture: ComponentFixture<EditarPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPasosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
