import {Component, OnDestroy, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CommonServiceService} from '../../common-service.service';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit, OnDestroy {
    @ViewChild(DataTableDirective)
    public dtElement: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    aprob: any = {};
    public dtTrigger: Subject<any> = new Subject();
    modalRef: BsModalRef;
    actualItem;
    actualPat = {
        id: '',
        nombre: '',
    apellido: '',
    direccion: '',
    rut: '',
    telefono: '', orden: ''

    };
    transactionsList: any = [];
    errorMessage: string;
    id;

    constructor(
        public commonService: CommonServiceService,
        private modalService: BsModalService
    ) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: 'lrtip',
        };
        this.getTransactions();
    }

    deleteModal(template: TemplateRef<any>, trans) {
        this.id = trans.id;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm modal-dialog-centered',
        });
    }

    aprobarModal(template: TemplateRef<any>, obj, trans) {
        this.actualPat = obj;
        this.aprob = trans;
        console.log(trans);
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm modal-dialog-centered',
        });
    }


    aprobarModel() {
        this.aprob.aprobado = true;
        this.commonService.updateDomicilio(this.aprob)
            .subscribe(
                v => {
                    console.log(v);
                }
            );
        this.getTransactions();
    }
    patientModal(template: TemplateRef<any>, trans) {
        this.actualPat = trans;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm modal-dialog-centered',
        });
    }

    deleteTrans() {
        this.transactionsList = this.transactionsList.filter(
            (a) => a.id !== this.id
        );
        this.modalRef.hide();
        // this.commonService.deleteTransaction(this.id).subscribe((data : any[])=>{
        //   this.getTransactions();
        // });
    }

    decline() {
        this.modalRef.hide();
    }

    btnColor() {
        document.getElementById('btn-yes').style.backgroundColor = '#00d0f1';
        document.getElementById('btn-yes').style.border = '1px solid #00d0f1';
        document.getElementById('btn-yes').style.color = '#fff';

        document.getElementById('btn-no').style.backgroundColor = '#fff';
        document.getElementById('btn-no').style.border = '1px solid #fff';
        document.getElementById('btn-no').style.color = '#000';
    }

    btnColorNo() {
        document.getElementById('btn-no').style.backgroundColor = '#00d0f1';
        document.getElementById('btn-no').style.border = '1px solid #00d0f1';
        document.getElementById('btn-no').style.color = '#fff';

        document.getElementById('btn-yes').style.backgroundColor = '#fff';
        document.getElementById('btn-yes').style.border = '1px solid #fff';
        document.getElementById('btn-yes').style.color = '#000';
    }

    getTransactions() {
        this.commonService.getDomicilios().subscribe(
            (res) => {
                this.transactionsList = res;
                console.log(res);
                // $(function () {
                //   $("table").DataTable();
                // });
                this.dtTrigger.next();
            },
            (error) => (this.errorMessage = (error as any))
        );
    }

    // destroy data table when leaving
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
