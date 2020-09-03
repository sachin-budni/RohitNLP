import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from '../enquiry/enquiry.component';
import { GallaryService } from '../services/gallary.service';
import { UploadTaskComponent } from './../upload-task/upload-task.component';
import { DemoMaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  declarations: [AdminComponent, ContactComponent, EnquiryComponent, UploadTaskComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [GallaryService]
})
export class AdminModule { }
