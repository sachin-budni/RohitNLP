import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GallaryService } from '../services/gallary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  routesNames;
  constructor(private galleryService:GallaryService) { 
    this.routesNames = this.galleryService.getRouteNames;
  }

  ngOnInit() {
  }

}
