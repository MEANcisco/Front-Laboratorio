import {Injectable} from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() {
    }

    createDb() {

        const specialityList = [
            {id: 1, key: '#SP001', speciality: 'Hematología', img: 'assets/img/specialities/specialities-01.png'},
            {id: 2, key: '#SP002', speciality: 'Endocrinología', img: 'assets/img/specialities/specialities-03.png'},
            {id: 3, key: '#SP003', speciality: 'Gastroenterología', img: 'assets/img/specialities/specialities-02.png'},
            {id: 4, key: '#SP004', speciality: 'Neumología', img: 'assets/img/specialities/specialities-04.png'},
            {id: 5, key: '#SP005', speciality: 'Reumatología', img: 'assets/img/specialities/specialities-05.png'},

        ];

        const appointments = [
            {
                id: 1,
                doctorName: 'Dr. Ruby Perrin',
                type: 'New patient',
                speciality: 'Dental',
                patient_key: '#PT0016',
                Patient_Name: 'George Anderson',
                appointment_time: 'Wed Nov 11 2020 10:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$150.00'
            },
            {
                id: 2,
                doctorName: 'Dr. Darren Eldder',
                type: 'Old patient',
                speciality: 'Dental',
                patient_key: '#PT0001',
                Patient_Name: 'Megan Bird',
                appointment_time: 'Wed Nov 03 2020 11:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$200.00'
            },
            {
                id: 3,
                doctorName: 'Dr. Deborah Angel',
                type: 'New patient',
                speciality: 'Cardiology',
                patient_key: '#PT0002',
                Patient_Name: 'Alvin Boykin',
                appointment_time: 'Wed Nov 1 2020 01:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$75.00'
            },
            {
                id: 4,
                doctorName: 'Dr. Sofia Brient',
                type: 'Old patient',
                speciality: 'Urology',
                patient_key: '#PT0003',
                Patient_Name: 'Nicholas Hicks',
                appointment_time: 'Wed Oct 30 2020 09:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$100.00'
            },
            {
                id: 5,
                doctorName: 'Dr. Marvin Campbell',
                type: 'New patient',
                speciality: 'Urology',
                patient_key: '#PT0004',
                Patient_Name: 'Sherri McCarthy',
                appointment_time: 'Wed Oct 28 2020 06:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$350.00'
            },
            {
                id: 5,
                doctorName: 'Dr. Marvin Campbell',
                type: 'Old patient',
                speciality: 'Urology',
                patient_key: '#PT0005',
                Patient_Name: 'Roger Loyd',
                appointment_time: 'Wed Oct 27 2020 08:00:48 GMT+0530 (India Standard Time)',
                status: 'active',
                amount: '$250.00'
            }
        ];

        const favourites = [
            {
                id: 1,
                doctor_name: 'Roberto Rodríguez Ramirez',
                speciality: 'Dentist',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Education: 'BDS - Dental Surgeon',
                Available: ' Available on Fri, 22 Mar ',
                Earned: '75-2 318666',
                Price: '$160',
                profile: 'assets/img/doctors/doctor-01.jpg',
                status: '1',
                type: 'Female',
                location: 'Edificio médico Escorial oficina 201, Yungay 475, Curicó.',
                availableTime: '10 am',
                consulting_fees: '$100',
                booking_fees: '$10',
                video_call: '$50'
            }
        ];

        const doctors = [
            {
                id: 1,
                doctor_name: 'Dr. Anaka Bruce',
                speciality: 'Orthopaedics',
                speciality_profile: 'assets/img/specialities/specialities-05.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Education: 'MDS - Periodontology and Oral Implantology, BDS',
                Available: ' Available on Fri, 22 Mar ',
                Earned: '3100.00',
                Price: '$160',
                profile: 'assets/img/doctors/doctor-thumb-02.jpg',
                status: '1',
                type: 'Female',
                location: 'Georgia, USA',
                availableTime: '10 am',
                consulting_fees: '$100',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 2,
                doctor_name: 'Dr. Ervina Mize',
                speciality: 'Cardiology',
                speciality_profile: 'assets/img/specialities/specialities-04.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '5000.00',
                Education: 'BDS, MDS - Oral & Maxillofacial Surgery',
                Available: ' Available on Fri, 22 Mar ',
                Price: ' $150 - $250 ',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-03.jpg',
                type: 'Female',
                location: 'Louisiana, USA',
                availableTime: '10 am',
                consulting_fees: '$100',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 3,
                doctor_name: 'Dr. Filotheya Milner',
                speciality: 'Neurology',
                speciality_profile: 'assets/img/specialities/specialities-05.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3300.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$210',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-09.jpg',
                type: 'Male',
                location: 'Georgia, USA',
                availableTime: '3 pm',
                consulting_fees: '$150',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 4,
                doctor_name: 'Dr. Jerman Delong',
                speciality: 'Dental',
                speciality_profile: 'assets/img/specialities/specialities-03.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3500.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$310',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-06.jpg',
                type: 'Male',
                location: 'Newyork, USA',
                availableTime: '12 am',
                consulting_fees: '$250',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 5,
                doctor_name: 'Dr. Leilani Olds',
                speciality: 'Urology',
                speciality_profile: 'assets/img/specialities/specialities-02.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-07.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 6,
                doctor_name: 'Dr. Lydah Sutton',
                speciality: 'Dental',
                speciality_profile: 'assets/img/specialities/specialities-03.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-05.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 7,
                doctor_name: 'Dr. Mackenna Slone',
                speciality: 'Dermatology',
                speciality_profile: 'assets/img/specialities/specialities-05.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-10.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 8,
                doctor_name: 'Dr. Neel AKins',
                speciality: 'Orthopaedics',
                speciality_profile: 'assets/img/specialities/specialities-02.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-08.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 9,
                doctor_name: 'Dr. Taddeo Bratoon',
                speciality: 'Dental',
                speciality_profile: 'assets/img/specialities/specialities-05.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-01.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            },
            {
                id: 10,
                doctor_name: 'Dr. Winoena Cliffors',
                speciality: ' Dental',
                speciality_profile: 'assets/img/specialities/specialities-01.png',
                since: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                Earned: '3700.00',
                Education: 'MBBS, MD - General Medicine, DNB - Cardiology',
                Available: ' Available on Fri, 22 Mar ',
                Price: '$260',
                status: '1',
                profile: 'assets/img/doctors/doctor-thumb-04.jpg',
                type: 'Male',
                location: 'Florida, USA',
                availableTime: '11 am',
                consulting_fees: '$200',
                booking_fees: '$10',
                video_call: '$50'
            }
        ];

        const patients = [
            {
                id: '1',
                key: '#PT0016',
                name: 'George Anderson',
                age: '38',
                address: 'Newyork, USA',
                phone: '+1 923 782 4575',
                email: 'richard@example.com',
                lastvisit: 'Wed Nov 14 2020 10:00:48 GMT+0530 (India Standard Time)',
                paid: '100.00',
                bloodgroup: 'AB+',
                type: 'Male',
                img: 'assets/img/patients/patient.jpg'
            },
            {
                id: '2',
                key: '#PT0001',
                name: 'Megan Bird',
                age: '29',
                address: 'North Carolina, USA',
                phone: '+1 828 632 9170',
                email: 'charlenereed@example.com',
                lastvisit: 'Wed Nov 12 2020 05:00:48 GMT+0530 (India Standard Time)',
                paid: '100.00',
                bloodgroup: 'o+',
                type: 'Female',
                img: 'assets/img/patients/patient1.jpg'
            },
            {
                id: '3',
                key: '#PT0002',
                name: 'Alvin Boykin',
                age: '23',
                address: 'Maine, USA',
                phone: '+1 207 729 9974',
                email: 'travistrimble@example.com',
                lastvisit: 'Wed Nov 11 2020 08:00:48 GMT+0530 (India Standard Time)',
                paid: '250.00',
                bloodgroup: 'B+',
                type: 'Male',
                img: 'assets/img/patients/patient2.jpg'
            },
            {
                id: '4',
                key: '#PT0003',
                name: 'Nicholas Hicks',
                age: '32',
                address: 'Newyork, USA',
                phone: '+1 260 724 7769',
                email: 'carlkelly@example.com',
                lastvisit: 'Wed Nov 09 2020 09:00:48 GMT+0530 (India Standard Time)',
                paid: '200.00',
                bloodgroup: 'A+',
                type: 'Male',
                img: 'assets/img/patients/patient3.jpg'
            },
            {
                id: '5',
                key: '#PT0004',
                name: 'Indiana, USA',
                age: '25',
                address: 'Indiana, USA',
                phone: '+1 504 368 6874',
                email: 'michellefairfax@example.com',
                lastvisit: 'Wed Nov 09 2020 06:00:48 GMT+0530 (India Standard Time)',
                paid: '150.00',
                bloodgroup: 'B+',
                type: 'Female',
                img: 'assets/img/patients/patient4.jpg'
            },
            {
                id: '6',
                key: '#PT0005',
                name: 'Roger Loyd',
                age: '25',
                address: 'Florida, USA',
                phone: '+1 954 820 7887',
                email: 'ginamoore@example.com',
                lastvisit: 'Wed Nov 08 2020 09:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'AB-',
                type: 'Male',
                img: 'assets/img/patients/patient5.jpg'
            },
            {
                id: '7',
                key: '#PT0006',
                name: 'Francis Giordano',
                age: '14',
                address: 'Kentucky, USA',
                phone: '+1 315 384 4562',
                email: 'elsiegilley@example.com',
                lastvisit: 'Wed Nov 06 2020 07:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'O-',
                type: 'Female',
                img: 'assets/img/patients/patient6.jpg'
            },
            {
                id: '8',
                key: '#PT007',
                name: 'Kate Mason',
                age: '25',
                address: 'California, USA',
                phone: '+1 707 2202 603',
                email: 'joangardner@example.com',
                lastvisit: 'Wed Nov 05 2020 12:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'A-',
                type: 'Female',
                img: 'assets/img/patients/patient7.jpg'
            },
            {
                id: '9',
                key: '#PT008',
                name: 'Glenn Johnson',
                age: '28',
                address: 'New Jersey, USA',
                phone: '9548207887',
                email: 'danielgriffing@example.com',
                lastvisit: 'Wed Nov 05 2020 07:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'o+',
                type: 'Female',
                img: 'assets/img/patients/patient8.jpg'
            },
            {
                id: '10',
                key: '#PT0009',
                name: 'Monty Smith',
                age: '28',
                address: 'Florida, USA',
                phone: '+1 850 358 4445',
                email: 'Elsie@example.com',
                lastvisit: 'Wed Nov 04 2020 10:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'A+',
                type: 'Male',
                img: 'assets/img/patients/patient9.jpg'
            },
            {
                id: '11',
                key: '#PT0010',
                name: 'Leroy Barnes',
                age: '19',
                address: 'California, USA',
                phone: '+1 858 259 5285',
                email: 'robertrhodes@example.com',
                lastvisit: 'Wed Nov 04 2020 09:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'B+',
                type: 'Female',
                img: 'assets/img/patients/patient10.jpg'
            },
            {
                id: '12',
                key: '#PT0011',
                name: 'William Colbert',
                age: '9',
                address: 'Colorado, USA',
                phone: '+1 303 607 7075',
                email: 'harrywilliams@example.com',
                lastvisit: 'Wed Nov 03 2020 06:00:48 GMT+0530 (India Standard Time)',
                paid: '350.00',
                bloodgroup: 'A-',
                type: 'Male',
                img: 'assets/img/patients/patient11.jpg'
            }
        ];

        const reviews = [
            {
                id: 1,
                patient_name: 'Tyree Crider',
                doctor_name: 'Dr.Leilani Olds',
                patient_pic: 'assets/img/patients/patient1.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-01.jpg',
                ratings: '5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 2,
                patient_name: 'Anisette Oneill',
                doctor_name: 'Dr. Neel Akins',
                patient_pic: 'assets/img/patients/patient2.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-02.jpg',
                ratings: '4',
                description: '',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 3,
                patient_name: 'Frye Demers',
                doctor_name: 'Dr. Taddeo Bratton',
                patient_pic: 'assets/img/patients/patient3.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-03.jpg',
                ratings: '4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 4,
                patient_name: 'Harry Williams',
                doctor_name: 'Dr. Winoena Clifford',
                patient_pic: 'assets/img/patients/patient4.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-04.jpg',
                ratings: '4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 5,
                patient_name: 'Kacee Butler',
                doctor_name: 'Dr. Lydhah Sutton',
                patient_pic: 'assets/img/patients/patient5.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-05.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 6,
                patient_name: 'Leilani Olds',
                doctor_name: 'Dr. Filotheya Milner',
                patient_pic: 'assets/img/patients/patient6.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-06.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 7,
                patient_name: 'Manlio Arnold',
                doctor_name: 'Dr. Jerman Delong',
                patient_pic: 'assets/img/patients/patient7.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-07.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 8,
                patient_name: 'Porchia Lumpkin',
                doctor_name: 'Dr. Anaka Bruce',
                patient_pic: 'assets/img/patients/patient8.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-08.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 9,
                patient_name: 'Saxton Furr',
                doctor_name: 'Dr. Ervina Mize',
                patient_pic: 'assets/img/patients/patient9.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-09.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            },
            {
                id: 10,
                patient_name: 'Shannen Fallon',
                doctor_name: 'Dr. Mckenna Slone',
                patient_pic: 'assets/img/patients/patient10.jpg',
                doctor_pic: 'assets/img/doctors/doctor-thumb-10.jpg',
                ratings: '3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)'
            }
        ];

        const comments = [

            {
                name: 'Michelle Fairfax',
                email: 'Fairfax@example.com',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            },
            {
                name: 'Elsie Gilley',
                email: 'Fairfax@example.com',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }

        ];

        const blogs = [
            {
                id: 1,
                title: 'Laboratorio Alemán – Making your clinic painless visit?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Deborah Angel',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-01.jpg',
                doctor_name: 'Dr. Ruby Perrin',
                doctor_pic: 'assets/img/doctors/doctor-thumb-01.jpg'

            },
            {
                id: 2,
                title: 'What are the benefits of Online Doctor Booking?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Deborah Angel',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-02.jpg',
                doctor_name: 'Dr. Fred Ortego',
                doctor_pic: 'assets/img/doctors/doctor-thumb-02.jpg'
            },
            {
                id: 3,
                title: 'Benefits of consulting with an Online Doctor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Deborah Angel',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-03.jpg',
                doctor_name: 'Dr. Deborah Angel',
                doctor_pic: 'assets/img/doctors/doctor-thumb-03.jpg'
            },
            {
                id: 4,
                title: '5 Great reasons to use an Online Doctor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-04.jpg',
                doctor_name: 'Dr. Sofia Brient',
                doctor_pic: 'assets/img/doctors/doctor-thumb-04.jpg'
            },
            {
                id: 5,
                title: 'Online Doctor Appointment Scheduling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-05.jpg',
                doctor_name: 'Dr. Marvin Campbell',
                doctor_pic: 'assets/img/doctors/doctor-thumb-05.jpg'
            },
            {
                id: 6,
                title: 'Simple steps to make your doctor visits exceptional!',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-06.jpg',
                doctor_name: 'Dr. Katharine Berthold',
                doctor_pic: 'assets/img/doctors/doctor-thumb-06.jpg'
            },
            {
                id: 7,
                title: 'Choose your own Online Doctor Appointment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-07.jpg',
                doctor_name: 'Dr. Linda Tobin',
                doctor_pic: 'assets/img/doctors/doctor-thumb-07.jpg'
            },
            {
                id: 8,
                title: 'Simple steps to visit your doctor today',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-08.jpg',
                doctor_name: 'Dr. Paul Richard ',
                doctor_pic: 'assets/img/doctors/doctor-thumb-08.jpg'
            },
            {
                id: 9,
                title: '5 Great reasons to use an Online Doctor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-09.jpg',
                doctor_name: 'Dr. John Gibbs ',
                doctor_pic: 'assets/img/doctors/doctor-thumb-09.jpg'
            },
            {
                id: 10,
                title: 'Online Doctoral Programs',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdBy: 'Dr. Sofia Brient',
                createdAt: 'Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                comments: 12,
                type: 'Health Tips',
                status: 'active',
                img: 'assets/img/blog/blog-10.jpg',
                doctor_name: 'Dr. Olga Barlow',
                doctor_pic: 'assets/img/doctors/doctor-thumb-10.jpg'
            }
        ];

        const transactions = [
            {
                id: 1,
                invoiceNumber: '#IN0001',
                patient_id: '#PT0016',
                patient_name: 'Kacee Butler',
                profile: 'assets/img/patients/patient1.jpg',
                total_amount: '$450.00',
                date: 'Wed Nov 14 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 2,
                invoiceNumber: '#IN0002',
                patient_id: '#PT0001',
                patient_name: 'Manlio Arnold',
                profile: 'assets/img/patients/patient2.jpg',
                total_amount: '$200.00',
                date: 'Wed Nov 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 3,
                invoiceNumber: '#IN0003',
                patient_id: '#PT0002',
                patient_name: 'Saxton Furr',
                profile: 'assets/img/patients/patient3.jpg',
                total_amount: '$100.00',
                date: 'Wed Nov 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 4,
                invoiceNumber: '#IN0004',
                patient_id: '#PT0003',
                patient_name: 'Tyree Crider',
                profile: 'assets/img/patients/patient4.jpg',
                total_amount: '$350.00',
                date: 'Wed Nov 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 5,
                invoiceNumber: '#IN0005',
                patient_id: '#PT0004',
                patient_name: 'Anisette Oneill',
                profile: 'assets/img/patients/patient5.jpg',
                total_amount: '$275.00',
                date: 'Wed Nov 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 6,
                invoiceNumber: '#IN0006',
                patient_id: '#PT0005',
                patient_name: 'Porchia Lumpkin',
                profile: 'assets/img/patients/patient6.jpg',
                total_amount: '$600.00',
                date: 'Wed Nov 9 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 7,
                invoiceNumber: '#IN0007',
                patient_id: '#PT0006',
                patient_name: 'Leilani Olds',
                profile: 'assets/img/patients/patient7.jpg',
                total_amount: '$50.00',
                date: 'Wed Nov 8 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 8,
                invoiceNumber: '#IN0008',
                patient_id: '#PT0007',
                patient_name: 'Shannen Fallon',
                profile: 'assets/img/patients/patient8.jpg',
                total_amount: '$400.00',
                date: 'Wed Nov 7 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 9,
                invoiceNumber: '#IN0009',
                patient_id: '#PT0008',
                patient_name: 'Frye Demers',
                profile: 'assets/img/patients/patient9.jpg',
                total_amount: '$550.00',
                date: 'Wed Nov 6 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            },
            {
                id: 10,
                invoiceNumber: '#IN0010',
                patient_id: '#PT0009',
                patient_name: 'Garrey Mangum',
                profile: 'assets/img/patients/patient10.jpg',
                total_amount: '$100.00',
                date: 'Wed Nov 5 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'paid'
            }
        ];
        return {transactions, comments, favourites, blogs, specialityList, appointments, doctors, patients, reviews};

    }
}
