import {Component, OnDestroy, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {CommonServiceService} from '../../common-service.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit, OnDestroy {
    @ViewChild(DataTableDirective)
    public dtElement: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    public dtTrigger: Subject<any> = new Subject();
    reviews: any = [];
    errorMessage: string;
    modalRef: BsModalRef;
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
        this.getReviews();
    }

    deleteModal(template: TemplateRef<any>, special) {
        let data = this.reviews.filter((a) => a.id === special.id);
        this.id = data[0].id;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm modal-dialog-centered',
        });
    }

    getReviews() {
        this.commonService.getReviews().subscribe(
            (res) => {
                this.reviews = res;
                // $(function () {
                //   $("table").DataTable();
                // });
                this.dtTrigger.next();
            },
            (error) => (this.errorMessage = <any>error)
        );
    }

    // deleteReview() {
    //   this.commonService.deleteReview(this.id).subscribe((data: any[]) => {
    //     this.modalRef.hide();
    //     this.getReviews();
    //   });
    // }

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

    // destroy data table when leaving
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
