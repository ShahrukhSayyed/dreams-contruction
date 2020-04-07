import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from 'src/app/logger';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  addProjectForm: FormGroup;
  image :any;project:any;projectId:any;_editProject=false;
  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
    private toastrService:ToastrService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {

    this.projectId = +this.route.snapshot.paramMap.get('id');
    this.createForm()

    if(this.projectId){
      console.log("edit");
      this._editProject = true
      this.getProjectById(this.projectId)
    }
  }

  createForm() {
    this.addProjectForm = this.fb.group({
      projectTitle: ['', Validators.required ],
      projectClient: ['', Validators.required ],
      projectPhoto: ['', Validators.required ],

    });
  }

  onSubmit(){
    let inputFields = {
      projectClient: `${this.addProjectForm.controls['projectClient'].value}`,
      projectPhoto:this.image,
      projectTitle:`${this.addProjectForm.controls['projectTitle'].value}`, 
      projectId:this.project ? this.project.projectId : '',
      createdBy:this.project ? this.project.createdBy :'',
      createdDate:this.project ? this.project.createdDate : '',
      updatedBy:this.project ? this.project.updatedBy :'',
      updatedDate:this.project? this.project.updatedBy :''
    }

    if(this._editProject){
      this.adminService.updateProject(this.projectId,inputFields)
      .then(
        res => {
          this.toastrService.success(`Project Updated Successfully!`)
          this.resetFields();
          // this.router.navigate(['/home']);
        }
      )
  
    }else{
      this.adminService.addProject(inputFields)
      .then(
        res => {
          this.toastrService.success(`Project added Successfully!`)
          this.resetFields();
          // this.router.navigate(['/home']);
        }
      )  
    }
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(this.image)

    }
    myReader.readAsDataURL(file);
  }

  resetFields(){
    this.addProjectForm = this.fb.group({
      projectTitle: new FormControl('', Validators.required),
      projectClient: new FormControl('', Validators.required),
      projectPhoto: new FormControl('', Validators.required),
    });
    this.image = null
  }

  getProjectById(projectId){
    this.adminService.getProjectByIdFunction(projectId).then((response:Logger) => {
      console.log(response);
      if(response.statusCode == "200"){        
        // this.allProjects = response.data
        this.project = response.data.payload.doc.data()
        this.projectId = response.data.payload.doc.id
        this.addProjectForm = this.fb.group({
          projectTitle: new FormControl(this.project.projectTitle, Validators.required),
          projectClient: new FormControl(this.project.projectClient, Validators.required),
          projectPhoto: new FormControl('', Validators.required),
        });
        this.image = this.project.projectPhoto
      }
    }).catch((error)=>{
      console.log(error);
      this.toastrService.error(error.statusMessage)      
    })
  }

  deleteProjectById(projectId){
    this.adminService.deleteProjectByIdFunction(projectId).then((response) => {
      console.log(response);
      this.toastrService.error("Project Deleted")      
      this.router.navigate(['/admin/projects-management'])
      
    }).catch((error)=>{
      console.log(error);
      this.toastrService.error(error.statusMessage)      
    })
  }

  cancelButton(){
    if(this._editProject){
      this.deleteProjectById(this.projectId)
    }
    else{
      this.router.navigate(['/admin/projects-management'])
    }
  }

  cancelButton2(){
    this.router.navigate(['/admin/projects-management'])

  }
}
