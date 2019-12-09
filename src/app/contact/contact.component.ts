import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFormGroup:FormGroup;

  constructor(private fb:FormBuilder) {
    this.contactFormGroup = this.fb.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      subject:["",Validators.required],
      message:[""]
    })
  }

  ngOnInit() {
  }

}
