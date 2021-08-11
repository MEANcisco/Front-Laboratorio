import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiredatabaseService {

  constructor(private fs: AngularFirestore) { }

  public createCalendar(data: any) {
    return this.fs.collection('calendar').add(data);
  }

  public getCalendar() {
    return this.fs.collection('calendar').snapshotChanges();
  }
}
