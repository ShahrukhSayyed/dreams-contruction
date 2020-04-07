import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Logger } from 'src/app/logger';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.css']
})
export class ProjectsManagementComponent implements OnInit {
  allProjects: Array<any>;

  constructor(
    private adminService:AdminService,
    private toastrService:ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getAllProjects()
  }

  getAllProjects(){
    this.allProjects = []
    this.adminService.getAllProjectsFunction().then((response:Logger) => {
      console.log(response);
      if(response.statusCode == "200"){
        this.allProjects = response.data
      }
    }).catch((error)=>{
      console.log(error);
      this.toastrService.error(error.statusMessage)      
    })
  }

  addProject(){
    this.router.navigate(['admin/manage-project/add'])
  }
  editProject(projectId){
    this.router.navigate(['admin/manage-project/edit/',projectId])

  }
}
