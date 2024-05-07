import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLandscapeComponent } from './card-landscape.component';

describe('CardLandscapeComponent', () => {
  let component: CardLandscapeComponent;
  let fixture: ComponentFixture<CardLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
