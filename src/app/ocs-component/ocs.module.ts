import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OcsRoutes } from './ocs.routing';
import { ButtonDefinitionComponent } from './button-definition/button-definition.component';
// tslint:disable-next-line: max-line-length
import { OcsButtonModule, OcsTextBoxModule, OcsDropDownModule, OcsNumberBoxModule, OcsPersianDateBoxModule, OcsAutocompleteModule, OcsCardModule, OcsCheckBoxModule, OcsDataTableModule, OcsFileBoxModule, OcsRadioBoxModule, OcsTabsModule, OcsTooltipDirective } from 'ocs-ui-core';
import { TextBoxDefinitionComponent } from './text-box-definition/text-box-definition.component';
import { DropDownDefinitionComponent } from './drop-down-definition/drop-down-definition.component';
import { NumberBoxDefinitionComponent } from './number-box-definition/number-box-definition.component';
import { DateBoxDefinitionComponent } from './date-box-definition/date-box-definition.component';
import { AutoCompleteDefinitionComponent } from './auto-complete-definition/auto-complete-definition.component';
import { CardDefinitionComponent } from './card-definition/card-definition.component';
import { CheckBoxDefinitionComponent } from './chech-box-definition/chech-box-definition.component';
import { DataTableDefinitionComponent } from './data-table-definition/data-table-definition.component';
import { FileBoxDefinitionComponent } from './file-box-definition/file-box-definition.component';
import { OcsCarouselModule } from 'ocs-ui-core/core/components/ocs-carousel/carousel.module';
import { RadioBoxDefinitionComponent } from './radio-box-definition/radio-box-definition.component';
import { TabsDefinitionComponent } from './tabs-definition/tabs-definition.component';
import { PipesDefinitionComponent } from './pipes-definition/pipes-definition.component';
import { CarouselDefinitionComponent } from './carousel-definition/carousel-definition.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OcsRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    OcsButtonModule,
    OcsTextBoxModule,
    OcsDropDownModule,
    OcsNumberBoxModule,
    OcsPersianDateBoxModule,
    OcsAutocompleteModule,
    OcsCardModule,
    OcsCheckBoxModule,
    OcsDataTableModule,
    OcsFileBoxModule,
    // OcsCarouselModule,
    OcsRadioBoxModule,
    OcsTabsModule
  ],

  providers: [],

  declarations: [
    ButtonDefinitionComponent,
    TextBoxDefinitionComponent,
    DropDownDefinitionComponent,
    NumberBoxDefinitionComponent,
    DateBoxDefinitionComponent,
    AutoCompleteDefinitionComponent,
    CardDefinitionComponent,
    CheckBoxDefinitionComponent,
    DataTableDefinitionComponent,
    FileBoxDefinitionComponent,
    CarouselDefinitionComponent,
    RadioBoxDefinitionComponent,
    TabsDefinitionComponent,
    PipesDefinitionComponent
  ]
})
export class OcsComponentsModule { }
