import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserFullNamePipe} from '../../pipes/user-full-name.pipe';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [UserFullNamePipe],
  imports: [
    EditorModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UserFullNamePipe,
    EditorModule
  ]
})
export class SharedModule {
}
