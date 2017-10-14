import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  exports: [  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class BuildMotionAlertModule { }
