import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignuppagePageRoutingModule } from './signuppage-routing.module';

import { SignuppagePage } from './signuppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignuppagePageRoutingModule
  ],
  declarations: [SignuppagePage]
})
export class SignuppagePageModule {}
