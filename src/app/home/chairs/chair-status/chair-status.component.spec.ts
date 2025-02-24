import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairStatusComponent } from './chair-status.component';

describe('ChairStatusComponent', () => {
  let component: ChairStatusComponent;
  let fixture: ComponentFixture<ChairStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChairStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChairStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
