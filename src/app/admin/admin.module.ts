import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { ManageProjectComponent } from './projects-management/manage-project/manage-project.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule    
  ],
  declarations: [UsersComponent, ProjectsManagementComponent, ManageProjectComponent, EnquiriesComponent]
})
export class AdminModule { }
