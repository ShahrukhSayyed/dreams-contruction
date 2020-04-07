import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DreamsProjectsComponent } from './dreams-projects/dreams-projects.component';
import { DreamsServicesComponent } from './dreams-services/dreams-services.component';
import { HeadComponent } from './head/head.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: "head",
        component: HeadComponent,
        data: {
          title: 'Head',
        }
      },

      {
        path: "about",
        component: AboutComponent,
        data: {
          title: 'About',
        }
      },
      {
        path: "contact-us",
        component:ContactComponent,
        data: {
          title: 'Contact Us',
        }
      },
      {
        path: "projects",
        component:DreamsProjectsComponent,
        data: {
          title: 'Dreams Projects',
        }
      },
      
      {
        path: "services",
        component:DreamsServicesComponent,
        data: {
          title: 'Dreams Services',
        }
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
