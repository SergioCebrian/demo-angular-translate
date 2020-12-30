import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
