import { NgModule } from "@angular/core";
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
  MatSnackBarModule
} from "@angular/material";

@NgModule({
  exports: [
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
    MatSnackBarModule
  ]
})

export class MaterialModule {}
