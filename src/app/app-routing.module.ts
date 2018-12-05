import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './components/core-ui/sign-up/sign-up.component';
import {SignInComponent} from './components/core-ui/sign-in/sign-in.component';
import {DashboardComponent} from './components/core-ui/dashboard/dashboard.component';
import {AuthGuard} from './guards/Auth.guard';
import {ProfileComponent} from './components/core-ui/profile/profile.component';
import {CoreComponent} from './components/core-ui/core/core.component';

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
        component: DashboardComponent
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
