import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCMIComponent } from './ccmi.component';

describe('CCMIComponent', () => {
  let component: CCMIComponent;
  let fixture: ComponentFixture<CCMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCMIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
