import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GallaryService } from '../services/gallary.service';

export class Contact{
  name:string;
  email:string;
  subject:string;
  message:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  requiredAlert = "Required this field";
  contactFormGroup:FormGroup;

  constructor(private fb:FormBuilder,private gallaryService:GallaryService) {
    this.contactFormGroup = this.fb.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      subject:["",Validators.required],
      message:[""]
    })
  }

  ngOnInit() {
  }

  onSubmit(data:Contact){
    this.gallaryService.contactForm(data)
  }

}
