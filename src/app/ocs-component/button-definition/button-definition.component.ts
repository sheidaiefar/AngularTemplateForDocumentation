import { Component, Inject } from '@angular/core';
import { StandardStringBag, STANDARD_STRING_BAG, UiUtilsService } from 'ocs-ui-core';

@Component({
    selector: 'app-button-definition',
    templateUrl: './button-definition.component.html',
   // styleUrls: ['./button-definition.component.css']
})
export class ButtonDefinitionComponent {
    constructor(
       // @Inject(STANDARD_STRING_BAG) public stdBag: StandardStringBag,
        private uiUtilsService: UiUtilsService,
    ) { }

    showMessage() {
        this.uiUtilsService.showSnackBar('Save Button Pressed');
    }
}
