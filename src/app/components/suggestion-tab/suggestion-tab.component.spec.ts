import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionTabComponent } from './suggestion-tab.component';

describe('SuggestionTabComponent', () => {
  let component: SuggestionTabComponent;
  let fixture: ComponentFixture<SuggestionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
