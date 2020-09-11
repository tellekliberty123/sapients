import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SharedUiModule } from '../shared/shared.ui.module';
import { MiscDetailsComponent } from '../product-details/misc-details/misc-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: MiscDetailsComponent
      }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    SharedUiModule,
    RouterModule
  ]
})
export class CoreRoutingModule { }
