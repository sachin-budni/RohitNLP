import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sets=[
    {
      head:"WHERE ARE YOU GUYS BASED OUT OF, DO YOU TRAVEL TO DIFFERENT LOCATIONS FOR WEDDINGS?",
      sub:["WE ARE BASED IN BANGALORE AND WE TRAVEL ACROSS THE GLOBE FOR SHOOTS."]
    },{
      head:"WHAT ARE THE VARIOUS SERVICES YOU OFFER?",
      sub:[
        "CANDID PHOTOGRAPHY",
        "TRADITIONAL PHOTOGRAPHY",
        "TRADITIONAL VIDEOGRAPHY"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
