import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptvrfypagePageRoutingModule } from './optvrfypage-routing.module';

import { OptvrfypagePage } from './optvrfypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptvrfypagePageRoutingModule
  ],
  declarations: [OptvrfypagePage]
})
export class OptvrfypagePageModule {}
