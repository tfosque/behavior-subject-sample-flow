import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutMenusComponent } from './flyout-menus.component';

describe('FlyoutMenusComponent', () => {
  let component: FlyoutMenusComponent;
  let fixture: ComponentFixture<FlyoutMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyoutMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
