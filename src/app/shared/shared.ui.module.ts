import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { InfoSectionComponent } from './info-section/info-section.component';

/// Include All PRIMENG Components
@NgModule({
  declarations: [
    StarRatingComponent,
    InfoSectionComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    BreadcrumbModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    StarRatingComponent,
    MenubarModule,
    BreadcrumbModule,
    DialogModule,
    ButtonModule
  ]
})
export class SharedUiModule { }
