import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,MatDialogModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MoneyPipe } from '../pipes/money.pipe';

import { HoverDirective } from '../directive/hover.directive';
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
    MatDialogModule,
    HoverDirective
  ],
  declarations: [MoneyPipe,
    HoverDirective]
})
export class SharedModule { }
