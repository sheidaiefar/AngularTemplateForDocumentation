import { Routes } from '@angular/router';
import { ButtonDefinitionComponent } from './button-definition/button-definition.component';
import { TextBoxDefinitionComponent } from './text-box-definition/text-box-definition.component';
import { DropDownDefinitionComponent } from './drop-down-definition/drop-down-definition.component';
import { NumberBoxDefinitionComponent } from './number-box-definition/number-box-definition.component';
import { DateBoxDefinitionComponent } from './date-box-definition/date-box-definition.component';
import { AutoCompleteDefinitionComponent } from './auto-complete-definition/auto-complete-definition.component';
import { CardDefinitionComponent } from './card-definition/card-definition.component';
import { CheckBoxDefinitionComponent } from './chech-box-definition/chech-box-definition.component';
import { DataTableDefinitionComponent } from './data-table-definition/data-table-definition.component';




export const OcsRoutes: Routes = [
  {
    path: 'button',
    component: ButtonDefinitionComponent
  },
  {
    path: 'textBox',
    component: TextBoxDefinitionComponent
  },
  {
    path: 'numberBox',
    component: NumberBoxDefinitionComponent
  },
  {
    path: 'dropDown',
    component: DropDownDefinitionComponent
  },
  {
    path: 'dateBox',
    component: DateBoxDefinitionComponent
  },
  {
    path: 'autoComplete',
    component: AutoCompleteDefinitionComponent
  },
  {
    path: 'card',
    component: CardDefinitionComponent
  },
  {
    path: 'checkBox',
    component: CheckBoxDefinitionComponent
  },
  {
    path: 'dataTable',
    component: DataTableDefinitionComponent
  },

];
