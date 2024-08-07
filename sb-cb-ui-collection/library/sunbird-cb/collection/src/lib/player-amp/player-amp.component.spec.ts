import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { PlayerAmpComponent } from './player-amp.component'

describe('PlayerAmpComponent', () => {
  let component: PlayerAmpComponent
  let fixture: ComponentFixture<PlayerAmpComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerAmpComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAmpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
