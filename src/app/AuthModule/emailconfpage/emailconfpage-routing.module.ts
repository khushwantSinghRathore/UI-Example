import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailconfpagePage } from './emailconfpage.page';

const routes: Routes = [
  {
    path: '',
    component: EmailconfpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailconfpagePageRoutingModule {}
