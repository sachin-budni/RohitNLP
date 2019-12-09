import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    // "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&w=1000&q=80",
    {
      name:"Birthday Images",
      img:"https://images.unsplash.com/photo-1476718840318-386693801fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      name:"Marriege Images",
      img:"https://i.pinimg.com/originals/fa/92/47/fa92471b04aa2f0b27bf682368cea756.jpg"
    },
    {
      name:"pre-wedding Images",
      img:"https://wallpapersinn.com/wp-content/uploads/2019/05/Black-Background-HD-Wallpaper-147.jpeg"
    },
    {
      name:"jdfkds fksdjfkds",
      img:"https://images.unsplash.com/photo-1504237043184-3fbf1a501dd4?ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      name:"kfjdskfs fserew",
      img:"https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name:"kfsjd oasd",
      img:"https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
