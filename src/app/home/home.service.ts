import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private db: AngularFirestore
  ) { }


  saveContactDetails(value){
    return this.db.collection('enquiries').add({
      name: value.name,
      contactNumber: value.contactNumber,
      dateOfEnquiry: Date.now()
    });
  }
}
 