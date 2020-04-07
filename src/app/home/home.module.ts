import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { DreamsServicesComponent } from './dreams-services/dreams-services.component';
import { DreamsProjectsComponent } from './dreams-projects/dreams-projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [AboutComponent, DreamsServicesComponent, DreamsProjectsComponent, ContactComponent, HeadComponent]
})
export class HomeModule { }
