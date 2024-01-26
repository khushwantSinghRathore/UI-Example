import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpasspagePageRoutingModule } from './forgetpasspage-routing.module';

import { ForgetpasspagePage } from './forgetpasspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpasspagePageRoutingModule
  ],
  declarations: [ForgetpasspagePage]
})
export class ForgetpasspagePageModule {}
