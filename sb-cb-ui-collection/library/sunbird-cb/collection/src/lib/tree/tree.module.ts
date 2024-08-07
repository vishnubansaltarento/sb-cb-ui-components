import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TreeComponent } from './tree.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatTreeModule } from '@angular/material/tree'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    RouterModule,

    // Material Imports
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TreeComponent],
  entryComponents: [TreeComponent],
})
export class TreeModule { }
