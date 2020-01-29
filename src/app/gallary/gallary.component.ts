import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GallaryService } from '../services/gallary.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  paramRoutes = ["weddingEvent","birthdayEvent","preweddingEvent","postweddingEvent","candidePic","wildPhotography"];

  headerName = {};
  $images:Observable<any>;
  constructor(private routes:ActivatedRoute,private router:Router,
              private galleryService:GallaryService,private dialog:MatDialog) { }

  ngOnInit() {
    this.routes.params.subscribe(d=>{
      if(this.paramRoutes.includes(d.id)){
        this.headerName = this.galleryService.getRouteNames.filter(d1=>d1.path == d.id);
      }else{
        this.router.navigate(["gallery","weddingEvent"])
      }
    })
    this.$images = this.galleryService.getAllImages;
  }

  openImage(img){
    let dialogRef = this.dialog.open(ImageComponent,{
      data:img,
    })

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  
}
