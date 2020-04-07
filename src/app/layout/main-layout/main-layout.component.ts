import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  userLoginSubscription: Subscription;
  _userLogin = false;
  userName = ''
  constructor(
    private restService:RestService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userLoginSubscription = this.restService.getUserLoginStatus().subscribe(response => {
      this._userLogin = response;
      if(this._userLogin == true){
        let userDetails = localStorage.getItem('userDetails')
        this.userName = userDetails['firstName'].charAt(0) + userDetails['lastName'].charAt(0);
      }
    });
  }

  ngOnDestroy(){
    if(this.userLoginSubscription)
      this.userLoginSubscription.unsubscribe()
  }

  logout(){
    localStorage.setItem('userLogin',"false")
    localStorage.removeItem('userDetails')
    this.router.navigate(['/home/head'])
    this.restService.setUserLoginStatus()
  }
}
