import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';

const appRoutes : Routes = [
  {
    path: '',
    component: LoginComponent
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
