import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomescreenpagePage } from './welcomescreenpage.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomescreenpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomescreenpagePageRoutingModule {}
