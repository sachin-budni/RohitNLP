import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class GallaryService {


  constructor(private http:HttpClient,private afDB:AngularFireDatabase) { }

  get getRouteNames(){
    return [
      {path:"weddingEvent",name:"Wedding Events"},
      {path:"birthdayEvent",name:"Birthday Events"},
      {path:"preweddingEvent",name:"Pre-Wedding Events"},
      {path:"postweddingEvent",name:"Post-Wedding Events"},
      {path:"candidePic",name:"Candide Pics"},
      {path:"wildPhotography",name:"Wild photography"}
    ]
  }

  get getAllImages(){
    return this.http.get("https://picsum.photos/v2/list?page=1&limit=40").pipe(
      map((img:[])=>{
        // return img;
        return this.chunkArray(img,img.length/4);
      })
    );
  }
  chunkArray(myArray, chunk_size){
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];
      
      for (index = 0; index < arrayLength; index += chunk_size) {
          let myChunk = myArray.slice(index, index+chunk_size);
          // Do something if you want with the group
          tempArray.push(myChunk);
      }

      return tempArray;
  }

  contactForm(value){
    return this.afDB.list("contact").push(value)
  }

  enquiryForm(value){
    return this.afDB.list("enquiry").push(value);
  }
}
