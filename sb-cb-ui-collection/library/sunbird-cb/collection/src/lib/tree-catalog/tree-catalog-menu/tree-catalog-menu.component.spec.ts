import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { TreeCatalogMenuComponent } from './tree-catalog-menu.component'

describe('TreeCatalogMenuComponent', () => {
  let component: TreeCatalogMenuComponent
  let fixture: ComponentFixture<TreeCatalogMenuComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TreeCatalogMenuComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCatalogMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
