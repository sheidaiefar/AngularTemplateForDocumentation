import { Component } from '@angular/core';
import { UiUtilsService } from 'ocs-ui-core';

@Component({
    selector: 'app-drop-down-definition',
    templateUrl: './drop-down-definition.component.html',
    // styleUrls: ['./drop-down-definition.component.css']
})
export class DropDownDefinitionComponent {
    items: any[] = [{ 'id': '1', 'fullName': 'John' } , { 'id': '2', 'fullName': 'James' }];
constructor(
    private uiUtilsService: UiUtilsService,
) { }

}
