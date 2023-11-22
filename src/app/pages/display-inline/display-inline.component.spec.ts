import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInlineComponent } from './display-inline.component';

describe('DisplayInlineComponent', () => {
  let component: DisplayInlineComponent;
  let fixture: ComponentFixture<DisplayInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayInlineComponent]
    });
    fixture = TestBed.createComponent(DisplayInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
