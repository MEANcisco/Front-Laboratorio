import {Component, OnInit, } from '@angular/core';
import {ReqAppointService} from '../../services/req-appoint.service';

declare var $: any;
declare var Morris: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    appoint: any;
    usrcount;
    constructor(
        private booking: ReqAppointService,
        private req: ReqAppointService
    ) {
    }

    ngOnInit(): void {
        this.booking.getAppoints()
            .then(
                data => {
                    console.log(data);
                    this.appoint = data;
                }
            );
        this.req.getUsers()
            .then(
                data =>
                {
                    console.log(data);
                    this.usrcount = data;
                }
            )
        const chartAreaData = [
            {y: '2006', a: 100, b: 90},
            {y: '2007', a: 75, b: 65},
            {y: '2008', a: 50, b: 40},
            {y: '2009', a: 75, b: 65},
            {y: '2010', a: 50, b: 40},
            {y: '2011', a: 75, b: 65},
            {y: '2012', a: 100, b: 90},
        ];
        const chartLineData = [
            {y: '2006', a: 100, b: 90},
            {y: '2007', a: 75, b: 65},
            {y: '2008', a: 50, b: 40},
            {y: '2009', a: 75, b: 65},
            {y: '2010', a: 50, b: 40},
            {y: '2011', a: 75, b: 65},
            {y: '2012', a: 100, b: 90},
        ];

        /* Morris Area Chart */
        Morris.Area({
            element: 'morrisArea',
            data: [
                {y: '2013', a: 60},
                {y: '2014', a: 100},
                {y: '2015', a: 240},
                {y: '2016', a: 120},
                {y: '2017', a: 80},
                {y: '2018', a: 100},
                {y: '2019', a: 300},
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Revenue'],
            lineColors: ['#fe235b'],
            lineWidth: 2,

            fillOpacity: 0.5,
            gridTextSize: 10,
            hideHover: 'auto',
            resize: true,
            redraw: true,
        });

        /* Morris Line Chart */
        Morris.Line({
            element: 'morrisLine',
            data: [
                {y: '2015', a: 100, b: 30},
                {y: '2016', a: 20, b: 60},
                {y: '2017', a: 90, b: 120},
                {y: '2018', a: 50, b: 80},
                {y: '2019', a: 120, b: 150},
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Doctors', 'Patients'],
            lineColors: ['#fe235b', '#122852'],
            lineWidth: 1,
            gridTextSize: 10,
            hideHover: 'auto',
            resize: true,
            redraw: true,
        });
    }
}
