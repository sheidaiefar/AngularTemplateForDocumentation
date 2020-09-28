import { Input, OnInit, Component } from '@angular/core';
import { DataProviderFunc, DataSourceRequest, DataSourceResult } from 'ocs-ui-core';
import { UserModel } from './UserModel';


@Component({
    selector: 'app-data-table-definition',
    templateUrl: './data-table-definition.component.html'
})

export class DataTableDefinitionComponent implements OnInit {
    dataProvider: DataProviderFunc<UserModel[]>;

    @Input() data: UserModel[] = [
        { name: 'Sara', age: 12 },
        { name: 'Ali', age: 52 },
        { name: 'Mina', age: 34 },
        { name: 'Tina', age: 34 },
        { name: 'Jina', age: 55 },
        { name: 'Sina', age: 54 },
        { name: 'Nina', age: 77 },
        { name: 'Ramin', age: 33},
        { name: 'Anna', age: 67 },
        { name: 'Mani', age: 24 },
        { name: 'Mina', age: 65 },
        { name: 'Saman', age: 24},
        { name: 'Amin', age: 26 }];
    constructor() { }

    ngOnInit(): void {
        this.dataProvider = this.createDataProvider();
    }

    createDataProvider(): DataProviderFunc<UserModel[]> {
        return (req: DataSourceRequest) => {
            return DataSourceResult.fromArray(this.data, req);
        };
    }
}
