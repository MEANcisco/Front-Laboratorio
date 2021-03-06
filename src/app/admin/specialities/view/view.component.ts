import {Component, OnDestroy, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CommonServiceService} from '../../../common-service.service';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnDestroy {
    @ViewChild(DataTableDirective)
    public dtElement: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    public dtTrigger: Subject<any> = new Subject();
    speciality = [];
    modalRef: BsModalRef;
    errorMessage: string;
    name;
    id;
    key;
    fileToUpload: File = null;

    constructor(
        private commonService: CommonServiceService,
        private modalService: BsModalService
    ) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: 'lrtip',
        };
        this.getSpecialityList();
    }

    getSpecialityList() {
        this.commonService.getSpeciality().subscribe(
            (data: any[]) => {
                this.speciality = data;
                this.dtTrigger.next();
            },
            (error) => (this.errorMessage = <any>error)
        );
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {
            class: 'modal-lg modal-dialog-centered',
        });
        // this.name = "";
        // this.id = "";
        // this.key = "";
    }

    editModal(template: TemplateRef<any>, special) {
        this.id = special.id;
        // this.name = data[0].speciality;
        // this.id = data[0].id;
        // this.key = data[0].key;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-lg modal-dialog-centered',
        });
    }

    deleteModal(template: TemplateRef<any>, special) {
        this.id = special.id;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm modal-dialog-centered',
        });
    }

    save() {
        let count = this.speciality.reverse()[0]['key'] + 1;
        let id = this.speciality.reverse()[0]['id'] + 1
        let params = {
          id : id,
          key : count,
          speciality : this.name
        }
        this.commonService.createSpeciality(params).subscribe((data : any[])=>{
          this.modalRef.hide();
          this.getSpecialityList();
        })
        this.modalRef.hide();
    }

    update() {
        let params = {
            id: this.id,
            key: this.key,
            speciality: this.name,
        };
        // this.commonService.updateSpeciality(params,this.id).subscribe((data : any[])=>{
        //   this.modalRef.hide();
        //   this.getSpecialityList();
        // });
        this.modalRef.hide();
    }

    // deleteSpeciality() {
    //   this.speciality = this.speciality.filter((a) => a.id !== this.id);
    //   this.commonService.deleteSpeciality(this.id).subscribe((data: any[]) => {
    //     this.modalRef.hide();
    //     this.getSpecialityList();
    //     this.dtTrigger.next();
    //   });
    // }

    decline() {
        this.modalRef.hide();
    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
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

    // destroy data table when leaving
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
