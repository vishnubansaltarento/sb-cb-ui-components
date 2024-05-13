import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentStripWithTabsLibComponent } from './content-strip-with-tabs-lib.component';

describe('ContentStripWithTabsComponent', () => {
  let component: ContentStripWithTabsLibComponent;
  let fixture: ComponentFixture<ContentStripWithTabsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentStripWithTabsLibComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStripWithTabsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
