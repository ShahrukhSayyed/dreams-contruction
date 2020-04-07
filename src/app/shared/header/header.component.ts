import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userLogin;
  @Input() userName;
  @Output() logout:EventEmitter<any> = new EventEmitter();
  @ViewChild('navbarResponsive') navbarResponsive: ElementRef;

  showedSection: any;
  collapsed = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    let arr=this.router.url.split('/');
    this.showedSection=arr[2];
  }

  public changeSection(section){
    console.log(this.navbarResponsive);
    
    // this.navbarResponsive.nativeElement.classList.add('show')
    this.navbarResponsive.nativeElement.classList.remove('show')

    let path = `${section}`
    this.router.navigate([path]);
    if (section === this.showedSection) {
      this.showedSection = "0";
    } else {
      this.showedSection = section;
    }

  }
  public logoutFunction(){
    this.logout.emit()
  }
}
