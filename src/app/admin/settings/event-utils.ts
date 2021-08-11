import { EventInput } from '@fullcalendar/angular';
import  '../../services/firedatabase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today



export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00'
    }
];

export function createEventId() {
    return String(eventGuid++);
}

export function firecal() {
    return this.fs.collection('calendar').snapshotChanges();
}
