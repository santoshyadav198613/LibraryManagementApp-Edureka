import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MoneyPipe
  ],
  declarations: [MoneyPipe]
})
export class SharedModule { }
