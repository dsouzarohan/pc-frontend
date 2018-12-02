import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/core-ui/sign-up/sign-up.component';
import { SignInComponent } from './components/core-ui/sign-in/sign-in.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { HomeComponent } from './components/core-ui/home/home.component';
import { ProfileComponent } from './components/core-ui/profile/profile.component';
import { CoreComponent } from './components/core-ui/core/core.component';
import { HeaderComponent } from './components/navigation-ui/header/header.component';
import { SidenavComponent } from './components/navigation-ui/sidenav/sidenav.component';
import { FixedSideNavComponent } from './components/navigation-ui/fixed-side-nav/fixed-side-nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatStepperModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule, MatSidenavModule, MatOptionModule, MatSelectModule, MatToolbarModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    ProfileComponent,
    CoreComponent,
    HeaderComponent,
    SidenavComponent,
    FixedSideNavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
