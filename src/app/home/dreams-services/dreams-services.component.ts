import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dreams-services',
  templateUrl: './dreams-services.component.html',
  styleUrls: ['./dreams-services.component.css']
})
export class DreamsServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      "serviceTitle": "2D Plan (As per Vastu)",
      "serviceImage": "2d-drafting.jpg",
    },

    {
      "serviceTitle": "3D Architectural Design",
      "serviceImage": "3D-architectural.jpg",
    },
    {
      "serviceTitle": "Interior Design",
      "serviceImage": "interior-design.jpg",
    },
    {
      "serviceTitle": "Building Estimation",
      "serviceImage": "estimate-of-building.jpg",
    },
    {
      "serviceTitle": "RCC Structural Design",
      "serviceImage": "structural-engineering.jpeg",
    },
    {
      "serviceTitle": "Supervision Services",
      "serviceImage": "site-supervision.jpeg",
    },
    {
      "serviceTitle": "Building Material Services",
      "serviceImage": "building-materials-services.jpeg",
    },
    {
      "serviceTitle": "Bank Loan Finance",
      "serviceImage": "bank-loan-service.jpg",
    },


  ]
}
