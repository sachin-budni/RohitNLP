import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GallaryService } from '../services/gallary.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ImageComponent } from '../image/image.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {


  headerName: string;
  $images: Observable<any>;
  constructor(private routes: ActivatedRoute, private router: Router,
              private galleryService: GallaryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.routes.params.subscribe(d => {
      this.headerName = d.id.replace('-', ' ');
      this.$images = this.galleryService.images(d.id).pipe(
        map((image) => {
          return image;
        })
      );
      // .subscribe(di => {
      //   if (di.length !== 0) {
      //   } else {
      //     this.router.navigate(['']);
      //   }
      // });
    });
    // this.$images = this.galleryService.getAllImages;
  }

  openImage(img) {
    const dialogRef = this.dialog.open(ImageComponent, {
      data: img,
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
