import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Logger } from 'src/app/logger';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  allEnquiries = [];
  constructor(
    private adminService:AdminService,
    private toastrService:ToastrService
  ) { }

  ngOnInit() {
    this.getAllEnquiries()
  }



  getAllEnquiries(){
    this.allEnquiries = []
    this.adminService.getAllEnquiriesFunction().then((response:Logger) => {
      console.log(response);
      if(response.statusCode == "200"){
        this.allEnquiries = response.data
      }
    }).catch((error)=>{
      console.log(error);
      this.toastrService.error(error.statusMessage)      
    })
  }
}
