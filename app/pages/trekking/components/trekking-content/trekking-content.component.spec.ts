import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingContentComponent } from './trekking-content.component';

describe('TrekkingContentComponent', () => {
  let component: TrekkingContentComponent;
  let fixture: ComponentFixture<TrekkingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekkingContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
