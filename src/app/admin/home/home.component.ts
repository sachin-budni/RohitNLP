import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/services/gallary.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentForm: FormGroup;
  requiredAlert = 'required Field';
  perc: Observable<number>;
  $content: Observable<any>;
  editKey = undefined;
  constructor(private gallaryService: GallaryService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.$content = this.gallaryService.getContent;
    this.createForm();
  }

  createForm() {
    this.contentForm = this.fb.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      img: ['', Validators.required],
    });
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files  as FileList;
    const file = files.item(0);
    const ref = this.gallaryService.ref(file.name);
    const task: AngularFireUploadTask = this.gallaryService.uploadContentImg(file);
    this.perc = task.percentageChanges();

    const snapshot = task.snapshotChanges().pipe(
      tap(console.log),

      finalize(async () => {
        const donwloadUrl = await ref.getDownloadURL().toPromise();
        this.contentForm.get('img').setValue(donwloadUrl);
      })
    );
    snapshot.subscribe();
  }
  get uploadedImg() {
    return  this.contentForm.get('img').value;
  }

  onSubmit(value) {
    if (!this.contentForm.valid) {
      return;
    }

    if (this.editKey) {
      this.gallaryService.editContentForm(value, this.editKey);
      this.contentForm.reset();
      this.editKey = undefined;
      return;
    }

    this.gallaryService.contentForm(value);
    this.contentForm.reset();
  }

  edit(value) {
    this.editKey = value.key;
    delete value.key;
    this.contentForm.setValue(value);
  }

  delete(key) {
    if (confirm('do you wanna delete')) {
      this.gallaryService.deleteContentForm(key);
    }
  }
}
