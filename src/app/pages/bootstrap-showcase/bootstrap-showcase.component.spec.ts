import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapShowcaseComponent } from './bootstrap-showcase.component';

describe('BootstrapShowcaseComponent', () => {
  let component: BootstrapShowcaseComponent;
  let fixture: ComponentFixture<BootstrapShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapShowcaseComponent]
    });
    fixture = TestBed.createComponent(BootstrapShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
