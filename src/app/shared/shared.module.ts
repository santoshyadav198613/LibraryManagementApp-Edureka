import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,MatDialogModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MoneyPipe } from '../pipes/money.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MoneyPipe,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [MoneyPipe]
})
export class SharedModule { }
