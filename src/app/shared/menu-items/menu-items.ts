import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Introduction', type: 'link', icon: 'av_timer' },
  { state: 'textBox', type: 'link', name: 'Text Box', icon: 'text_rotation_none' },
  { state: 'numberBox', type: 'link', name: 'Number Box', icon: 'looks_one' },
  { state: 'checkBox', type: 'link', name: 'Check Box', icon: 'check_box' },
  { state: 'dateBox', type: 'link', name: 'Date Box', icon: 'date_range' },
  { state: 'dataTable', type: 'link', name: 'Data Table', icon: 'table_chart' },
  { state: 'autoComplete', type: 'link', name: 'AutoComplete', icon: 'autorenew' },
  { state: 'dropDown', type: 'link', name: 'Drop Down', icon: 'arrow_drop_down' },
  { state: 'card', type: 'link', name: 'Card', icon: 'tab_unselected' },
  { state: 'button', type: 'link', name: 'Button', icon: 'crop_7_5' },


];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
