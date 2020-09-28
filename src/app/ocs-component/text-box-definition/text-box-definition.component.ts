import { Component, Inject } from '@angular/core';
import { StandardStringBag, STANDARD_STRING_BAG, UiUtilsService } from 'ocs-ui-core';

@Component({
    selector: 'app-text-box-definition',
    templateUrl: './text-box-definition.component.html',
   // styleUrls: ['./text-box-definition.component.css']
})
export class TextBoxDefinitionComponent {
    constructor(
        private uiUtilsService: UiUtilsService,
    ) { }

    showMessage() {
        this.uiUtilsService.showSnackBar('Save Button Pressed');
    }
}
