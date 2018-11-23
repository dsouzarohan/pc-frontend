import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/login/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/Auth.guard';

const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [
      AuthGuard
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
