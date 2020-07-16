import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollsbyComponent } from './scrollsby.component';

describe('ScrollsbyComponent', () => {
  let component: ScrollsbyComponent;
  let fixture: ComponentFixture<ScrollsbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollsbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollsbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
