import {NgModule} from '@angular/core';
import {SignInComponent} from '../../components/core-ui/sign-in/sign-in.component';
import {SignUpComponent} from '../../components/core-ui/sign-up/sign-up.component';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]

})

export class AuthModule{}
