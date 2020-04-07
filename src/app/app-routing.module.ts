import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule ,Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  // {
  //   path : 'hmi/splash-screen', component:SplashScreenComponent,
  // },
  {
    path: 'home',
    component:MainLayoutComponent,
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'authentication',
    component:MainLayoutComponent,
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },

  {
    path: 'admin',
    component:MainLayoutComponent,
    loadChildren: './admin/admin.module#AdminModule',
  },

  { path : '', redirectTo:'home/head',pathMatch:'full' },


];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})

  ],
  exports:[
    RouterModule
  ],

  declarations: [],
})
export class AppRoutingModule { }
