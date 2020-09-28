import { Component, Inject } from '@angular/core';
import { StandardStringBag, STANDARD_STRING_BAG, UiUtilsService } from 'ocs-ui-core';

@Component({
    selector: 'app-number-box-definition',
    templateUrl: './number-box-definition.component.html',
   // styleUrls: ['./number-box-definition.component.css']
})
export class NumberBoxDefinitionComponent {
    constructor(
        private uiUtilsService: UiUtilsService,
    ) { }

    showMessage() {
        this.uiUtilsService.showSnackBar('Save Button Pressed');
    }
}
