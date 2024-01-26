import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasspagePage } from './resetpasspage.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpasspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpasspagePageRoutingModule {}
