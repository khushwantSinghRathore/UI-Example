import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailconfpagePageRoutingModule } from './emailconfpage-routing.module';

import { EmailconfpagePage } from './emailconfpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailconfpagePageRoutingModule
  ],
  declarations: [EmailconfpagePage]
})
export class EmailconfpagePageModule {}
