import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughComponent } from './through.component';

describe('ThroughComponent', () => {
  let component: ThroughComponent;
  let fixture: ComponentFixture<ThroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
