import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninpagePage } from './signinpage.page';

const routes: Routes = [
  {
    path: '',
    component: SigninpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninpagePageRoutingModule {}
