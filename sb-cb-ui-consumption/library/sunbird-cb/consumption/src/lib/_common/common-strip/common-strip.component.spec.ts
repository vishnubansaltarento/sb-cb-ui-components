import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStripComponent } from './common-strip.component';

describe('CommonStripComponent', () => {
  let component: CommonStripComponent;
  let fixture: ComponentFixture<CommonStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
