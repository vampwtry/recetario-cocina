import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaComponent } from './medida.component';

describe('MedidaComponent', () => {
  let component: MedidaComponent;
  let fixture: ComponentFixture<MedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
