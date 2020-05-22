import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { GallaryService } from '../services/gallary.service';
import { map } from 'rxjs/operators';
import { DatabaseSnapshot, SnapshotAction } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  eventName: string;
  allEventName: Observable<any[]>;
  files: FileList;
  selectedEventName: string;
  events: Observable<any[]>;
  constructor(private authService: AuthService, private gallary: GallaryService) { }

  ngOnInit() {
    this.allEventName = this.authService.allEventNames;
    this.events = this.authService.events.pipe(
      map((event: []) => {
        return event.map((e: SnapshotAction<any>) => {
          const payload: DatabaseSnapshot<any> = e.payload;
          return { key: payload.key, ...payload.val() };
        });
      })
    );
  }

  addEventName() {
    this.authService.eventName(this.eventName);
    this.eventName  = '';
  }

  uploadImages(event) {
    if (this.selectedEventName) {
      const target: HTMLInputElement = event.target;
      this.files = target.files;
    } else {
      alert('Please Select event name from above dropdown');
    }
  }

}
