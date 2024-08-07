import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BtnSocialDeleteComponent } from './btn-social-delete.component'

describe('BtnSocialDeleteComponent', () => {
  let component: BtnSocialDeleteComponent
  let fixture: ComponentFixture<BtnSocialDeleteComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSocialDeleteComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSocialDeleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
