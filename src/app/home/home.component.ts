import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GallaryService } from '../services/gallary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild("myCarousel",{static:false}) myCarousel:NguCarousel<any>;
  enquiryFormGroup:FormGroup;

  images = [
    // "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&w=1000&q=80",
    {
      name:"Birthday Images",
      img:"https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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

  slidesImages = [
    "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/09/631728-wedding.jpg",
    "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/09/1552561678_i_xLvmDxd_X2.jpg",
    "https://media.weddingz.in/images/70a49d96af7c16692b3296d2207f2261/marriage-dates-in-april-2019.jpg",
    "https://resources.stuff.co.nz/content/dam/images/1/c/w/t/l/z/image.related.StuffLandscapeSixteenByNine.710x400.1f92cb.png/1478483293501.jpg",
    "https://static.kannada.news18.com/optimize/oZDyeiF7spBiDGZ0TMegXfVo1OM=/0x0/static.kannada.news18.com/kannada/uploads/2019/10/dhruva-sarja-prerana-2.jpg"
  ]

  constructor(private cdr:ChangeDetectorRef,private fb:FormBuilder,private gallaryService:GallaryService) {
  }

  data:any;
  ngOnInit() {

    this.enquiryFormGroup = this.fb.group({
      name:["",Validators.required],
      mobileNo:["",Validators.required],
      email:[""],
      event:["",Validators.required],
    });

    this.data = this.slidesImages;
    this.cdr.detectChanges();
  }



  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    // load: this.reviewData.length
    slide:3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    animation:"lazy",
    
  }

  onSubmit(value){
    this.gallaryService.enquiryForm(value)
  }

}
