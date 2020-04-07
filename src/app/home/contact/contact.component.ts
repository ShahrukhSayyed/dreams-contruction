import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[7-9]{1}[0-9]{9}$";  

  constructor(
    private homeService:HomeService,
    private router:Router,
    private fb: FormBuilder,
    private toastrService:ToastrService

  ) { }

  ngOnInit() { 
    this.createForm()
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      contactNumber: ['', Validators.required ],
    });
  }

  onSubmit(value){
    console.log(value);
    
    if(this.validateMobileNumber(value.contactNumber)){
      // this.toastrService.success("Valid Mobile Number")

      this.homeService.saveContactDetails(value)
      .then(
        res => {
          this.toastrService.success(`Thanks ${this.contactForm.controls['name'].value} , We will contact you soon`)
          this.resetFields();
          // this.router.navigate(['/home']);
        }
      )  
    }
    else{
      this.toastrService.error("Please enter valid mobile Number")
    }
  }

  resetFields(){
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
    });
  }
  
  validateMobileNumber(mobileNumber){
    let value = mobileNumber    
    // let phoneno = /^\d{10}$/;
    let phoneno = /^[7-9]{1}[0-9]{9}$/;

    
    if((value.match(this.mobNumberPattern))){
      return true;
    }else{
      return false;
    }
  }

}
