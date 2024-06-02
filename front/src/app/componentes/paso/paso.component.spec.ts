import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoComponent } from './paso.component';

describe('PasoComponent', () => {
  let component: PasoComponent;
  let fixture: ComponentFixture<PasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
