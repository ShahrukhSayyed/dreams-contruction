import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { ManageProjectComponent } from './projects-management/manage-project/manage-project.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: "projects-management",
        component: ProjectsManagementComponent,
        data: {
          title: 'Projects Management',
        }
      },
      {
        path: "manage-project/add",
        component: ManageProjectComponent,
        data: {
          title: 'Manage Project',
        }
      },
      {
        path: "manage-project/edit/:id",
        component: ManageProjectComponent,
        data: {
          title: 'Manage Project',
        }
      },

      {
        path: "enquiries",
        component: EnquiriesComponent,
        data: {
          title: 'Enquiries',
        }
      },
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
