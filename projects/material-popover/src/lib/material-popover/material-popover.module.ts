import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MdePopoverTrigger } from './material-popover-trigger';
import { MdePopoverTarget } from './material-popover-target';
import { A11yModule } from '@angular/cdk/a11y';
import { MaterialPopoverComponent } from './material-popover.component';



@NgModule({
  declarations: [
    MaterialPopoverComponent, MdePopoverTrigger, MdePopoverTarget
  ],
  imports: [
    OverlayModule,
    CommonModule,
    A11yModule,
  ],
  exports: [
    MaterialPopoverComponent, MdePopoverTrigger, MdePopoverTarget
  ]
})
export class MaterialPopoverModule { }

