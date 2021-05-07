import {Component, OnInit, ViewChild} from '@angular/core';
import 'datatables.net';
import {DataTableDirective} from 'angular-datatables';

@Component({
    selector: 'app-admin-data-table',
    templateUrl: './admin-data-table.component.html',
    styleUrls: ['./admin-data-table.component.css'],
})
export class AdminDataTableComponent implements OnInit {
    @ViewChild(DataTableDirective)
    public dtElement: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    datatable: any;

    constructor() {
    }

    ngOnInit(): void {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: 'lrtip',
        };
    }
}
