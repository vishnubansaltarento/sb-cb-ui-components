import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgressPortraitLibComponent } from './card-progress-portrait-lib.component';

describe('CardProgressPortraitLibComponent', () => {
  let component: CardProgressPortraitLibComponent;
  let fixture: ComponentFixture<CardProgressPortraitLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProgressPortraitLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProgressPortraitLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
