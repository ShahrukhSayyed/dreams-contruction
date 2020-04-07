import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import 'rxjs/Rx';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  userLogin = new BehaviorSubject<string>(localStorage.getItem('userLogin'));

  constructor(private httpClient: HttpClient,
    private router: Router) {
  }

  public setUserLoginStatus() {
    this.userLogin.next(localStorage.getItem('userLogin'));
  }
  
  public getUserLoginStatus(): Observable<any> {
    return this.userLogin.asObservable();

  }
}
