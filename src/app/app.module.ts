import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DemoMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GallaryComponent } from './gallary/gallary.component';
import { GallaryService } from './services/gallary.service';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GallaryComponent,
    ImagesComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    NguCarouselModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule
  ],
  entryComponents:[ImageComponent],
  providers: [GallaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
