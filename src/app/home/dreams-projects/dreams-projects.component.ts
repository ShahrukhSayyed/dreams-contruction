import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { Logger } from 'src/app/logger';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dreams-projects',
  templateUrl: './dreams-projects.component.html',
  styleUrls: ['./dreams-projects.component.css']
})
export class DreamsProjectsComponent implements OnInit {
  allProjects: Array<any>;

  constructor(
    private adminService:AdminService,
    private toastrService:ToastrService
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
}
