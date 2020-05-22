import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { GallaryService } from '../services/gallary.service';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  @Input() name: string;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  donwloadUrl;

  constructor(private gallary: GallaryService) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    const path = `${this.name}/${this.file.name}`;

    const ref = this.gallary.ref(path);

    this.task = this.gallary.upload(path, this.file);

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),

      finalize(async () => {
        this.donwloadUrl = await ref.getDownloadURL().toPromise();

        this.gallary.addNameOfImage(this.donwloadUrl, this.name, path);
      })
    );
    this.snapshot.subscribe();
  }

}
