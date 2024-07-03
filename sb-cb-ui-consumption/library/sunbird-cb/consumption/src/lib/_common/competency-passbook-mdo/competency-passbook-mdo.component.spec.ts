import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyPassbookMdoComponent } from './competency-passbook-mdo.component';

describe('CompetencyPassbookMdoComponent', () => {
  let component: CompetencyPassbookMdoComponent;
  let fixture: ComponentFixture<CompetencyPassbookMdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyPassbookMdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyPassbookMdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
