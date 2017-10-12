import {NgModule} from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
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
    MdSelectionModule
  ];
const ImportsMoudles1: Array<any> = [
  NoopAnimationsModule,
  BrowserAnimationsModule,
];
const ImportsMoudles: Array<any> = ImportsMoudles1.concat(SharedModulesConfig);
@NgModule({
  imports: ImportsMoudles,
  exports: SharedModulesConfig
})
export class  SharedModule {}
