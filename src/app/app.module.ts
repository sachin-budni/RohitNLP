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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GallaryComponent } from './gallary/gallary.component';
import { GallaryService } from './services/gallary.service';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
// tslint:disable-next-line: quotemark
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
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
    ImageComponent,
    AdminComponent,
    UploadTaskComponent,
    LoginComponent
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
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  entryComponents: [ImageComponent],
  providers: [GallaryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
