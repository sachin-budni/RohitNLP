import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GallaryService } from '../services/gallary.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  paramRoutes = ["weddingEvent","birthdayEvent","preweddingEvent","postweddingEvent","candidePic","wildPhotography"];

  headerName = {};
  constructor(private routes:ActivatedRoute,private router:Router,
              private galleryService:GallaryService) { }

  ngOnInit() {
    this.routes.params.subscribe(d=>{
      if(this.paramRoutes.includes(d.id)){
        this.headerName = this.galleryService.getRouteNames.filter(d1=>d1.path == d.id);
      }else{
        this.router.navigate(["gallery","weddingEvent"])
      }
    })
  }

  
}
