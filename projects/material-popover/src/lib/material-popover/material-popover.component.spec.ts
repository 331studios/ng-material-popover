import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPopoverComponent } from './material-popover.component';

describe('MaterialPopoverComponent', () => {
  let component: MaterialPopoverComponent;
  let fixture: ComponentFixture<MaterialPopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialPopoverComponent]
    });
    fixture = TestBed.createComponent(MaterialPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
