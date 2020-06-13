import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class GallaryService {


  constructor(private http: HttpClient,
              private afDB: AngularFireDatabase,
              private storage: AngularFireStorage) { }

  get getRouteNames() {
    return this.afDB.list('event').valueChanges();
  }

  images(eventName) {
    return this.afDB.list(eventName).valueChanges().pipe(
      map((img: []) => {
        return this.chunkArray(img, img.length / 4);
      })
    );
  }

  // get getAllImages() {
  //   return this.http.get('https://picsum.photos/v2/list?page=1&limit=40').pipe(
  //     map((img: []) => {
  //       // return img;
  //       return this.chunkArray(img, img.length / 4);
  //     })
  //   );
  // }
  // tslint:disable-next-line: variable-name
  chunkArray(myArray: string | any[], chunk_size: number) {
    let index = 0;
    // tslint:disable-next-line: prefer-const
    let arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  contactForm(value) {
    return this.afDB.list('contact').push(value);
  }

  enquiryForm(value) {
    return this.afDB.list('enquiry').push(value);
  }

  ref(path: string) {
    return this.storage.ref(path);
  }

  upload(path: string, file: File) {
    return this.storage.upload(path, file);
  }

  addNameOfImage(path, eventName, paths) {
    this.afDB.list(`${eventName}`).push({url: path, paths});
  }

  getEventName(eventName: string) {
    return eventName.replace(' ', '-');
  }

  removeEvent(key: string, eventName: string) {
    this.afDB.object(`event/${key}`).remove();
    const name = this.getEventName(eventName);
    this.afDB.list(`${name}`).remove();
    this.storage.storage.ref(`${name}/`).listAll().then(d => {
      d.items.forEach((item) => {
        this.storage.storage.ref(`${name}/${item.name}`).delete();
      });
    });
  }
}
