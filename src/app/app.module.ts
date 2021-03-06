import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatSnackBar} from '@angular/material';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './modules/auth/auth.module';
import {SharedModule} from './modules/shared/shared.module';
import {NavigationModule} from './modules/navigation/navigation.module';
import {StoreModule} from '@ngrx/store';

import {effects, reducers} from './app.reducer';
import * as fromRouter from './states/router/router.reducer';

import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    NavigationModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    HttpClient,
    MatSnackBar,
    MatDialog,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: true}
    },
    {
      provide: RouterStateSerializer,
      useClass: fromRouter.RouterSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
