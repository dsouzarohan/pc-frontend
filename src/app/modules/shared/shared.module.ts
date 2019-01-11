import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserFullNamePipe} from '../../pipes/user-full-name.pipe';

@NgModule({
  declarations: [UserFullNamePipe],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UserFullNamePipe
  ]
})
export class SharedModule {
}
