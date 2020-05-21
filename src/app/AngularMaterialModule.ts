import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,MatAutocompleteModule,MatBottomSheetModule,MatButtonToggleModule,
   MatCardModule,MatCheckboxModule,MatStepperModule,MatDialogModule,MatDividerModule,
   MatExpansionModule,MatMenuModule,MatProgressBarModule,MatRippleModule,MatProgressSpinnerModule,
   MatSliderModule,MatSortModule,MatSlideToggleModule,MatSnackBarModule,MatTabsModule,MatTreeModule

} from '@angular/material';




@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,MatAutocompleteModule,MatBottomSheetModule,MatButtonToggleModule,
      MatCardModule,MatCheckboxModule,MatStepperModule,MatDialogModule,MatDividerModule,
      MatExpansionModule,MatMenuModule,MatProgressBarModule,MatRippleModule,MatProgressSpinnerModule,
      MatSliderModule,MatSortModule,MatSlideToggleModule,MatSnackBarModule,MatTabsModule,MatTreeModule
   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,MatAutocompleteModule,MatBottomSheetModule,MatButtonToggleModule,
      MatCardModule,MatCheckboxModule,MatStepperModule,MatDialogModule,MatDividerModule,
      MatExpansionModule,MatMenuModule,MatProgressBarModule,MatRippleModule,MatProgressSpinnerModule,
      MatSliderModule,MatSortModule,MatSlideToggleModule,MatSnackBarModule,MatTabsModule,MatTreeModule
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }