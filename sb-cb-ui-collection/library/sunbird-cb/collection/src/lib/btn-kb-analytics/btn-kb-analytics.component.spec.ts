import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BtnKbAnalyticsComponent } from './btn-kb-analytics.component'

describe('BtnKbAnalyticsComponent', () => {
  let component: BtnKbAnalyticsComponent
  let fixture: ComponentFixture<BtnKbAnalyticsComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BtnKbAnalyticsComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnKbAnalyticsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
