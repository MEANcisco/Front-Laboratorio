import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonServiceService} from '../../common-service.service';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {ReqAppointService} from "../../services/req-appoint.service";
import {AdminpaneService} from "../../services/adminpane.service";
import {ReqDoctorsService} from "../../services/req-doctors.service";

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit, OnDestroy {
    datatable: any;
    table;
    @ViewChild(DataTableDirective)
    public dtElement: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();

    constructor(
        private req: ReqAppointService,
        private admdata: AdminpaneService,
        private reqdoc: ReqDoctorsService
    ) {
    }

    async ngOnInit(): Promise<void> {
        // const table: any = $('table');
        // this.datatable = table.DataTable();

        this.reqdoc.getterDoctors()
            .then(
                (data) => {
                    this.table = (data as any);
                    console.log(data as any);
                    this.dtTrigger.next();

                }
            );
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            language: {
                processing: 'Cargando...',
                search: 'Buscar:',
                lengthMenu: 'Mostrar _MENU_ elementos',
                info: 'Mostrando desde _START_ al _END_ de _TOTAL_ elementos',
                infoEmpty: 'Mostrando ningún elemento.',
                infoFiltered: '(filtrado _MAX_ elementos total)',
                infoPostFix: '',
                loadingRecords: 'Cargando registros...',
                zeroRecords: 'No se encontraron registros',
                emptyTable: 'No hay datos disponibles en la tabla',
                paginate: {
                    first: 'Primero',
                    previous: 'Anterior',
                    next: 'Siguiente',
                    last: 'Último'
                },
                aria: {
                    sortAscending: ': Activar para ordenar la tabla en orden ascendente',
                    sortDescending: ': Activar para ordenar la tabla en orden descendente'
                }
            }
        };
    }
    setUsr(usr) {
        this.admdata.selectedusr = usr;
        console.log(usr);
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
