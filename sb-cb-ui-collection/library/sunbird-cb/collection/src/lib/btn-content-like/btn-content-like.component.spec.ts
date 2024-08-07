import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BtnContentLikeComponent } from './btn-content-like.component'

describe('BtnContentLikeComponent', () => {
  let component: BtnContentLikeComponent
  let fixture: ComponentFixture<BtnContentLikeComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BtnContentLikeComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnContentLikeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
