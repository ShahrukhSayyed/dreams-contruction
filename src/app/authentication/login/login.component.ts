import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Logger } from './../../logger'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./authentication.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  _loginform = true;
  _recoverform = false;
  allUsers: Array<any>;

  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
    private toastrService:ToastrService,
    private router:Router,
    private restService:RestService
  ) {}

  ngOnInit() {
    this.createForm()
  }

  showRecoverForm() {
    this._loginform = !this._loginform;
    this._recoverform = !this._recoverform;
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  async onSubmit(){
    console.log("Submitted");
    let input = {
      userName : `${this.loginForm.controls['userName'].value}`,
      password : `${this.loginForm.controls['password'].value}`
    }
    
    this.adminService.loginFunction(input).then((response:Logger) => {
      console.log(response);
      if(response.statusCode == "200"){
        this.toastrService.success("Login Successfull");
        localStorage.setItem('userDetails',JSON.stringify(response.data))
        localStorage.setItem('userLogin',"true")
        this.restService.setUserLoginStatus();
        this.router.navigate(['']);
      }
    }).catch((error)=>{
      console.log(error);
      this.toastrService.error(error.statusMessage)      
    })
  }
}
