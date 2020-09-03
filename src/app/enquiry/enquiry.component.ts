import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GallaryService } from '../services/gallary.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'mobileNo', 'event'];
  // tslint:disable-next-line: quotemark
  // dataSource = "dsds";

  dataSource: Observable<any>;

  constructor(private gallary: GallaryService) { }

  ngOnInit() {
    this.dataSource = this.gallary.enquiry;
  }

}
