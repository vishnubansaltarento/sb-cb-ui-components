import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CommonAssessmentViewerComponent } from './common-assessment-viewer.component'

describe('CommonAssessmentViewerComponent', () => {
  let component: CommonAssessmentViewerComponent
  let fixture: ComponentFixture<CommonAssessmentViewerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonAssessmentViewerComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAssessmentViewerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
