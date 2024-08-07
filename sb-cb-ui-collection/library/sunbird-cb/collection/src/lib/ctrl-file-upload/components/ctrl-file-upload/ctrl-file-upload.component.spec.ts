import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CtrlFileUploadComponent } from './ctrl-file-upload.component'

describe('CtrlFileUploadComponent', () => {
  let component: CtrlFileUploadComponent
  let fixture: ComponentFixture<CtrlFileUploadComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CtrlFileUploadComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlFileUploadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
