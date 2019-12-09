import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sets=[
    "Includes 30,500 square feet with 35' ceiling height (with 20 permanent room sets)",
    "Extensive Prop & Decor selection",
    "Multiple digital camera set-ups including video",
    "Set building shop (as well as a large inventory of over 200 existing set components)",
    "24’ cyclorama (also known as a 'cove'--painted white)",
    "Working Kitchen for food shoots",
    "Client areas (Wi-Fi throughout)",
    "Pressing area (for prepping soft goods/linens)",
    "Merchandise storage areas",
    "On-Site Parking",
    "Loading Docks for receiving"
  ]

  constructor() { }

  ngOnInit() {
  }

}
