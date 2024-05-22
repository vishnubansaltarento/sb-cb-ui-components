import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SlidersNgContentLibComponent } from './sliders-ng-content.component'

describe('SlidersNgContentLibComponent', () => {
  let component: SlidersNgContentLibComponent
  let fixture: ComponentFixture<SlidersNgContentLibComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlidersNgContentLibComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersNgContentLibComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
