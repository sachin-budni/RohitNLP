import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable()
export class AuthService {

  constructor(private database: AngularFireDatabase, private storage: AngularFireStorage,
              private angularAuth: AngularFireAuth) { }

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

  updateEvent(key: string, name: string) {
    const url = name.replace(' ', '-');
    this.updateFolderPath(name);
    return this.database.object(`event/${key}`).set({name, url});
  }

  updateFolderPath(name: string) {
    // this.storage.storage.ref(name).parent
  }

  login(value) {
    return this.angularAuth.auth.signInWithEmailAndPassword(value.email, value.password);
  }

  logout() {
    return this.angularAuth.auth.signOut();
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const currentUser = auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  get currentUser() {
    return this.angularAuth.auth.currentUser;
  }

  resetPassword(email) {
    return this.angularAuth.auth.sendPasswordResetEmail(email);
  }
}
