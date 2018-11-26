import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/Auth.guard';
import {ProfileComponent} from './components/profile/profile.component';
import {CoreComponent} from './components/core/core.component';

const appRoutes : Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]

  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class AppRoutingModule{

}
