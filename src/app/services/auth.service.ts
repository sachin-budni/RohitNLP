import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private database: AngularFireDatabase, private storage: AngularFireStorage,
              private auth: AngularFireAuth) { }

  get allImages() {
    return this.database.list('images').valueChanges();
  }

  get allEventNames(): Observable<any[]> {
    return this.database.list('event').valueChanges();
  }

  get events(): Observable<any[]> {
    return this.database.list('event').snapshotChanges();
  }

  eventName(name: string) {
    const url = name.replace(' ', '-');
    return this.database.list('event').push({name, url});
  }
}
