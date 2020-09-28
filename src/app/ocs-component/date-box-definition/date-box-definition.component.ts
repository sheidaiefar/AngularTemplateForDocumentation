import { Component } from '@angular/core';
import { UiUtilsService } from 'ocs-ui-core';

@Component({
    selector: 'app-date-box-definition',
    templateUrl: './date-box-definition.component.html',
    // styleUrls: ['./date-box-definition.component.css']
})
export class DateBoxDefinitionComponent {
    constructor(
        private uiUtilsService: UiUtilsService,
    ) { }
}
