import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaIndividualComponent } from './receta.individual.component';

describe('RecetaIndividualComponent', () => {
  let component: RecetaIndividualComponent;
  let fixture: ComponentFixture<RecetaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
