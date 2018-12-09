import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/core-ui/sign-up/sign-up.component';
import { SignInComponent } from './components/core-ui/sign-in/sign-in.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DashboardComponent } from './components/core-ui/dashboard/dashboard.component';
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
  MatNativeDateModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatSnackBar
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserMenuComponent } from './components/navigation-ui/sidenav-menus/user-menu/user-menu.component';
import {UserService} from './services/user.service';
import { ClassroomMenuComponent } from './components/navigation-ui/sidenav-menus/classroom-menu/classroom-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    ProfileComponent,
    CoreComponent,
    HeaderComponent,
    SidenavComponent,
    FixedSideNavComponent,
    UserMenuComponent,
    ClassroomMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,

    HttpClientModule
  ],
  providers: [

    HttpClient,

    UserService,

    MatSnackBar,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
