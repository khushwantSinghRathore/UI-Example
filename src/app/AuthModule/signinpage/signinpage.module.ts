import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninpagePageRoutingModule } from './signinpage-routing.module';

import { SigninpagePage } from './signinpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninpagePageRoutingModule
  ],
  declarations: [SigninpagePage]
})
export class SigninpagePageModule {}
