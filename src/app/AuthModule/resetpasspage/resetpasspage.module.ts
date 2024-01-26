import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpasspagePageRoutingModule } from './resetpasspage-routing.module';

import { ResetpasspagePage } from './resetpasspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpasspagePageRoutingModule
  ],
  declarations: [ResetpasspagePage]
})
export class ResetpasspagePageModule {}
