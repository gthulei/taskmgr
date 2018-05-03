import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { 
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
  
  ],
  exports :[
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  declarations: []
})
export class ShareModule { }
