import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GallaryService } from '../services/gallary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  requiredAlert = 'Field is required';

  enquiryFormGroup: FormGroup;

  $content: Observable<any>;
  constructor(private fb: FormBuilder, private gallaryService: GallaryService) {
  }

  ngOnInit() {

    this.enquiryFormGroup = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: [''],
      event: ['', Validators.required],
    });
    this.$content = this.gallaryService.getContent;
  }


  onSubmit(value) {
    this.gallaryService.enquiryForm(value);
    this.enquiryFormGroup.reset();
  }

}
