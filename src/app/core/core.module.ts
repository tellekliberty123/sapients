import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';

import { CoreRoutingModule } from './core.routing.module';
import { MainComponent } from './main/main.component';
import { ProductDetailsModule } from '../product-details/product-details.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    HeaderComponent,
    NavMenuComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductDetailsModule,
    CoreRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    NavMenuComponent,
    MainComponent,
    FooterComponent,
    CoreRoutingModule
  ]
})
export class CoreModule { }
