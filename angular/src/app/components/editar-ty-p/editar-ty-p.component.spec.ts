import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTyPComponent } from './editar-ty-p.component';

describe('EditarTyPComponent', () => {
  let component: EditarTyPComponent;
  let fixture: ComponentFixture<EditarTyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTyPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
