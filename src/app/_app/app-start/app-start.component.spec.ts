import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStartComponent } from './app-start.component';

describe('AppStartComponent', () => {
  let component: AppStartComponent;
  let fixture: ComponentFixture<AppStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
