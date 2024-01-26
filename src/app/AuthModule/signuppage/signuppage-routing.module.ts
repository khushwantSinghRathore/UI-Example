import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignuppagePage } from './signuppage.page';

const routes: Routes = [
  {
    path: '',
    component: SignuppagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignuppagePageRoutingModule {}
