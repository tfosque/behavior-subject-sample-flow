import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestiveItemsComponent } from './suggestive-items.component';

describe('SuggestiveItemsComponent', () => {
  let component: SuggestiveItemsComponent;
  let fixture: ComponentFixture<SuggestiveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestiveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
