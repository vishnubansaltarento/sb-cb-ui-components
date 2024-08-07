import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BtnKbComponent } from './btn-kb.component'

describe('BtnKbComponent', () => {
  let component: BtnKbComponent
  let fixture: ComponentFixture<BtnKbComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BtnKbComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnKbComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
