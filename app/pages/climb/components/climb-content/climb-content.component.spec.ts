import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbContentComponent } from './climb-content.component';

describe('ClimbContentComponent', () => {
  let component: ClimbContentComponent;
  let fixture: ComponentFixture<ClimbContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
