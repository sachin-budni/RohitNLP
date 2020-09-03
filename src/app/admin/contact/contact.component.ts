import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/services/gallary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'mobileNumber', 'subject', 'message'];
  // tslint:disable-next-line: quotemark
  // dataSource = "dsds";

  dataSource: Observable<any>;
  constructor(private gallary: GallaryService) { }

  ngOnInit() {
    this.dataSource = this.gallary.contact;
  }

}
