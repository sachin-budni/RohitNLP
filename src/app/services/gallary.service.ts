import { Injectable } from '@angular/core';

@Injectable()
export class GallaryService {


  constructor() { }

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
  
}
