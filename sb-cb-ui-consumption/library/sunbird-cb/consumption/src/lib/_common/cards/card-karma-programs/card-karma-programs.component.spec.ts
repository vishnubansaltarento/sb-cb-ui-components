import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKarmaProgramsComponent } from './card-karma-programs.component';

describe('CardKarmaProgramsComponent', () => {
  let component: CardKarmaProgramsComponent;
  let fixture: ComponentFixture<CardKarmaProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardKarmaProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKarmaProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
