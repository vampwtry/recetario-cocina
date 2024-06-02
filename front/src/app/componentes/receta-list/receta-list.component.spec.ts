import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaListComponent } from './receta-list.component';

describe('RecetaListComponent', () => {
  let component: RecetaListComponent;
  let fixture: ComponentFixture<RecetaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
