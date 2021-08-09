import {ToastrService} from 'ngx-toastr';
import {ReqAppointService} from './../services/req-appoint.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CommonServiceService} from '../common-service.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SlickCarouselComponent} from 'ngx-slick-carousel';
import * as moment from 'moment';
declare const $: any;

export interface Doctors {
    id: number;
    doctor_name: string;
    speciality: string;
    Education: string;
    location: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    today;
    selectex;
    datex;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
    exams = this.reqapp.getExams();
    @ViewChild('slickModal1') slickModal1: SlickCarouselComponent;
    @ViewChild('slickModal2') slickModal2: SlickCarouselComponent;
    @ViewChild('slickModal3') slickModal3: SlickCarouselComponent;
    specialityList: any = [];
    doctors: any = [];
    slidepage: any;
    employeeCtrl = new FormControl();
    filteredEmployee: Observable<Doctors[]>;
    blogs: any = [];
    keyword = 'name';
    searchDoctor = [];
    public countries = [
        {
            id: 1,
            name: 'Albania',
            img: 'image',
        },
        {
            id: 2,
            name: 'Belgium',
        },
        {
            id: 3,
            name: 'Denmark',
        },
        {
            id: 4,
            name: 'Montenegro',
        },
        {
            id: 5,
            name: 'Turkey',
        },
        {
            id: 6,
            name: 'Ukraine',
        },
        {
            id: 7,
            name: 'Macedonia',
        },
        {
            id: 8,
            name: 'Slovenia',
        },
        {
            id: 9,
            name: 'Georgia',
        },
        {
            id: 10,
            name: 'India',
        },
        {
            id: 11,
            name: 'Russia',
        },
        {
            id: 12,
            name: 'Switzerland',
        },
    ];
    slides = [
        {
            name: 'Denby Cathey',
            img: 'assets/img/doctors/doctor-05.jpg',
            degree: 'MBBS, MD - Ophthalmology',
            reviews: '(66)',
            address: 'Michigan, USA',
            date: 'Available on Fri, 20 Mar',
            amount: '$50 - $700',
        },
        {
            name: 'Orali Fisher',
            img: 'assets/img/doctors/doctor-01.jpg',
            degree: 'BDS - Dental Cosmetology',
            reviews: '(23)',
            address: 'Florida, USA',
            date: 'Available on Mon, 22 Sep',
            amount: '$150 - $220',
        },
        {
            name: 'Gennaro Weiner',
            img: 'assets/img/doctors/doctor-02.jpg',
            degree: 'MDS - Dental Cosmetology',
            reviews: '(35)',
            address: 'Newyork, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$50 - $300',
        },
        {
            name: 'Jerelyn Pino',
            img: 'assets/img/doctors/doctor-03.jpg',
            degree: 'MBBS, DNB - Cardiology',
            reviews: '(27)',
            address: 'Georgia, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$100 - $400',
        },
        {
            name: 'Marvin Campbell',
            img: 'assets/img/doctors/doctor-05.jpg',
            degree: 'MBBS, MD - Ophthalmology, DNB - Ophthalmology',
            reviews: '(66)',
            address: 'Michigan, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$50 - $700',
        },
        {
            name: 'Rieko Thrash',
            img: 'assets/img/doctors/doctor-04.jpg',
            degree: 'MBBS, MS - General Surgery',
            reviews: '(4)',
            address: 'Louisiana, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$150 - $250',
        },
        {
            name: 'Ultima Douglas',
            img: 'assets/img/doctors/doctor-06.jpg',
            degree: 'MS - Orthopaedics',
            reviews: '(52)',
            address: 'Texas, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$100 - $500',
        },
        {
            name: 'Neomah Oliveira',
            img: 'assets/img/doctors/doctor-07.jpg',
            degree: 'MBBS, MD - General Medicine',
            reviews: '(43)',
            address: 'Kansas, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$100 - $1000',
        },
        {
            name: 'Jillisa Tremblay',
            img: 'assets/img/doctors/doctor-08.jpg',
            degree: 'MBBS, MD - Dermatology',
            reviews: '(20)',
            address: 'California, USA',
            date: 'Available on Fri, 22 Mar',
            amount: '$100 - $400',
        },
    ];
    solutionSliderConfig = {
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    slideConfig3 = {
        dots: true,
        autoplay: false,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    //// next step 2
    sliderContent = [
        {
            solu_img: 'assets/img/solution1.png',
            speciality_img: 'assets/img/specialities/specialities-01.png',
            speciality: 'SURGERY',
            speciality_title: 'Heart Surgery',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution2.png',
            speciality_img: 'assets/img/specialities/specialities-02.png',
            speciality: 'SAVING LIVES',
            speciality_title: 'Valve Diseases',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution3.png',
            speciality_img: 'assets/img/specialities/specialities-03.png',
            speciality: 'GREAT CARE',
            speciality_title: 'Children’s services',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution1.png',
            speciality_img: 'assets/img/specialities/specialities-01.png',
            speciality: 'SURGERY',
            speciality_title: 'Heart Surgery',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution2.png',
            speciality_img: 'assets/img/specialities/specialities-02.png',
            speciality: 'SAVING LIVES',
            speciality_title: 'Heart Surgery',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution3.png',
            speciality_img: 'assets/img/specialities/specialities-03.png',
            speciality: 'GREAT CARE',
            speciality_title: 'Children’s services',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
        {
            solu_img: 'assets/img/solution1.png',
            speciality_img: 'assets/img/specialities/specialities-01.png',
            speciality: 'SURGERY',
            speciality_title: 'Heart Surgery',
            speciality_desc:
                'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
        },
    ];

    isapres = [
        {
            isapre: 'Banmedica',
            url: 'https://www.banmedica.cl/bono-web/'
        },
        {
            isapre: 'Cruz Blanca',
            url: 'https://www.cruzblanca.cl/cruzblanca/site/edic/base/port/acceso_privado.html'
        },
        {
            isapre: 'Colmena golden cross',
            url: 'https://www.colmena.cl/afiliados/#/login'
        },
        {
            isapre: 'Nueva Mas Vida',
            url: 'https://sv.nuevamasvida.cl'
        },
        {
            isapre: 'Fundación',
            url: 'https://www.isaprefundacion.cl'
        },
        {
            isapre: 'Vida Tres',
            url: 'https://www.isaprevidatres.cl/LoginVidaTres.aspx'
        },
        {
            isapre: 'Consalud',
            url: 'https://www.consalud.cl/viveconsalud/servicios-para-ti/servicios-bonos-web.html'
        },
    ];
    constructor(
        public router: Router,
        public commonService: CommonServiceService,
        public reqapp: ReqAppointService,
        private toastr: ToastrService
    ) {
        this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
            startWith(''),
            map((employee) =>
                employee ? this._filterEmployees(employee) : this.doctors.slice()
            )
        );
    }

    openelement(open) {
        window.open(open);
    }

    async ngOnInit() {
        // Slick Slider
        const today = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1; // January is 0!
        const yyyy = today.getFullYear();
        if (dd < 10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        this.today = yyyy + '-' + mm + '-' + (dd + 1);
        document.getElementById('datefield').setAttribute('value', this.today);
        const currentYear = moment().year();

        // this.examenes.forEach(
        //   v => {
        //     axios.post('http://localhost:1337/examenes', v)
        //     .then(
        //       res => {
        //         console.log(res);
        //       }
        //     );
        //   }
        // );
        // axios.post('http://localhost:1337/reservas', {
        //  examen: 'texto prueba',
        //  valor: 'texto prueba',
        //  status: 'test',
        //  appoint: '2016-05-19T10:38:47.046465',
        //  users_permissions_user: 1
        // })
        // .then(
        //   data => {
        //     console.log(data);
        //   }
        // );

        // axios.get('http://localhost:1337/reservas')
        // .then(
        //   res => {
        //     console.log(res);
        //   }
        // );
        if ($('.specialities-slider').length > 0) {
            $('.specialities-slider').slick({
                dots: true,
                autoplay: false,
                infinite: true,
                variableWidth: true,
                prevArrow: false,
                nextArrow: false
            });
        }

        if ($('.doctor-slider').length > 0) {
            $('.doctor-slider').slick({
                dots: false,
                autoplay: false,
                infinite: true,
                variableWidth: true,
            });
        }
        if ($('.features-slider').length > 0) {
            $('.features-slider').slick({
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 3,
                speed: 500,
                variableWidth: true,
                arrows: false,
                autoplay: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }

                }]
            });
        }


        window.scrollTo(0, 0);
        this.getspeciality();
        this.getDoctors();
        this.getblogs();

        // User's voice slider
        $('.testi-slider').each(function() {
            const $show = $(this).data('show');
            const $arr = $(this).data('arrow');
            const $dots = !$arr;
            let $m_show = $show;
            if ($show === 3) {
                $m_show = $show - 1;
            }
            $(this).slick({
                slidesToShow: $show,
                slidesToScroll: 1,
                arrows: $arr,
                autoplay: false,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                prevArrow:
                    '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
                nextArrow:
                    '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: $m_show,
                            slidesToScroll: 1,
                            infinite: true,
                            arrows: $arr,
                            dots: $dots,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                        },
                    },
                ],
            });
        });
    }

    next() {
        this.slickModal1.slickNext();
    }

    prev() {
        this.slickModal1.slickPrev();
    }

    getspeciality() {
        this.commonService.getSpeciality().subscribe((res) => {
            this.specialityList = res;
        });
    }

    getDoctors() {
        this.commonService.getDoctors().subscribe((res) => {
            this.doctors = res;
            this.slidepage = {
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            };
            this.countries = [];
            this.doctors.forEach((index, i) => {
                this.countries.push({
                    id: index.id,
                    name: index.doctor_name,
                });
            });
        });
    }

    getblogs() {
        this.commonService.getBlogs().subscribe((res) => {
            this.blogs = res;
        });
    }

    selectEvent(item) {
        const filter = this.countries.filter((a) => a.name === item.name);
        this.router.navigateByUrl('/patients/doctor-profile?id=' + filter[0].id);
        // do something with selected item
    }

    onChangeSearch(search: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }

    onFocused(e) {
        // do something
    }

    nextslide() {
        this.slickModal2.slickNext();
    }

    prevslide() {
        this.slickModal2.slickPrev();
    }

    nextpage() {
        this.slickModal3.slickNext();
    }


    NavDom() {
        if (this.reqapp.exaData.day !== '') {

            if (this.reqapp.exaData.examen !== 0) {
                this.router.navigate(['/patients/booking']);
            } else {
                this.toastr.warning('Porfavor seleccione el examen', 'Lo sentimos');
            }
        } else {
            this.toastr.warning('Porfavor seleccione la Fecha', 'Lo sentimos');
        }
    }
    Naver() {
        if (this.reqapp.exaData.day !== '') {

            if (this.reqapp.exaData.examen !== 0) {
                this.router.navigate(['/patients/domicilios']);
            } else {
                this.toastr.warning('Porfavor seleccione el examen', 'Lo sentimos');
            }
        } else {
            this.toastr.warning('Porfavor seleccione la Fecha', 'Lo sentimos');
        }
    }

    prevpage() {
        this.slickModal3.slickPrev();
    }

    private _filterEmployees(value: string): Doctors[] {
        const filterValue = value.toLowerCase();
        return this.doctors.filter(
            (state) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
        );
    }
}
