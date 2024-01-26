import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signuppage',
    loadChildren: () => import('./AuthModule/signuppage/signuppage.module').then( m => m.SignuppagePageModule)
  },
  {
    path: 'signinpage',
    loadChildren: () => import('./AuthModule/signinpage/signinpage.module').then( m => m.SigninpagePageModule)
  },
  {
    path: 'optvrfypage',
    loadChildren: () => import('./AuthModule/optvrfypage/optvrfypage.module').then( m => m.OptvrfypagePageModule)
  },
  {
    path: 'forgetpasspage',
    loadChildren: () => import('./AuthModule/forgetpasspage/forgetpasspage.module').then( m => m.ForgetpasspagePageModule)
  },
  {
    path: 'emailconfpage',
    loadChildren: () => import('./AuthModule/emailconfpage/emailconfpage.module').then( m => m.EmailconfpagePageModule)
  },
  {
    path: 'welcomescreenpage',
    loadChildren: () => import('./WelcomeModule/welcomescreenpage/welcomescreenpage.module').then( m => m.WelcomescreenpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
