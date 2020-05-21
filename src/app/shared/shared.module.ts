import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,NgForm} from '@angular/forms';
import {  AppRoutingModule } from '../app-routing.module';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ],
  exports:[FormsModule,CommonModule]
})
export class SharedModule { }
