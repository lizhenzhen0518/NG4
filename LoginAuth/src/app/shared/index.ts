
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    MdToolbarModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSelectModule,
    MdTabsModule,
    MdTooltipModule,
    MdSelectionModule,
    MdSlideToggleModule
 } from '@angular/material';

import {ImageListSelectComponent} from './image-list-select';
import {IdentityInputComponent} from './identity-input';
import {AreaListComponent} from './area-list';
import {AgeInputComponent} from './age-input';
const SharedModulesConfig: Array<any> = [
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdSelectModule,
    MdButtonToggleModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdGridListModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdProgressBarModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdTooltipModule,
    MdToolbarModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSelectionModule,
    CommonModule
  ];
const ImportsMoudles1: Array<any> = [

];
const ImportsMoudles: Array<any> = ImportsMoudles1.concat(SharedModulesConfig);
@NgModule({
  imports: ImportsMoudles,
  exports: [
    ImageListSelectComponent,
    IdentityInputComponent,
    AreaListComponent,
    AgeInputComponent,
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdSelectModule,
    MdButtonToggleModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdGridListModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdProgressBarModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdTooltipModule,
    MdToolbarModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSelectionModule,
    CommonModule
  ],
  declarations: [
    ImageListSelectComponent,
    IdentityInputComponent,
    AreaListComponent,
    AgeInputComponent
  ]
})
export class  SharedModule {}
