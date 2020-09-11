import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutwearComponent } from './outwear/outwear.component';
import { SharedUiModule } from '../shared/shared.ui.module';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { MiscDetailsComponent } from './misc-details/misc-details.component';

@NgModule({
  declarations: [
    OutwearComponent,
    ReviewersComponent,
    MiscDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    OutwearComponent,
    ReviewersComponent,
    SharedUiModule
  ]
})
export class ProductDetailsModule { }
