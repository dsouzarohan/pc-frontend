import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSnackBar } from "@angular/material";

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./modules/auth/auth.module";
import { SharedModule } from "./modules/shared/shared.module";
import { NavigationModule } from "./modules/navigation/navigation.module";
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    NavigationModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    HttpClient,
    MatSnackBar,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
