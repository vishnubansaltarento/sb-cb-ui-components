import { TestBed } from '@angular/core/testing'

import { CommonAssessmentViewerService } from './common-assessment-viewer.service'

describe('CommonAssessmentViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: CommonAssessmentViewerService = TestBed.get(CommonAssessmentViewerService)
    expect(service).toBeTruthy()
  })
})
