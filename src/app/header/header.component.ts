import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GallaryService } from '../services/gallary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routesNames: Observable<any[]>;
  constructor(private galleryService: GallaryService) {
  }

  ngOnInit() {
    this.routesNames = this.galleryService.getRouteNames;
  }

}
