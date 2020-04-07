import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Logger } from './../logger'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  chars = '0123456789'
  constructor(
    private db: AngularFirestore
  ) {

  }


  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  loginFunction = (req) => {
    let allUsers: Array<any>;
    let loginFlag = false
    let loggedInUser = null
    return new Promise((resolve, reject) => {
      if (req.userName && req.password) {
        console.log("req userName and password is there");
        //console.log(req.body);
        this.getUsers().subscribe((result) => {
          if (result) {
            allUsers = result
            allUsers.forEach(element => {
              let user = element.payload.doc.data()
              if (user.userName == req.userName && user.password == btoa(req.password)) {
                loginFlag = true;
                loggedInUser = user;
                // resolve(user);
              }
            });

            if (loginFlag) {
              let logger = new Logger(false, 'User login successfull', 200, loggedInUser)
              resolve(logger)
            }
            else {
              let logger = new Logger(true, 'Username or password is wrong', 404, loggedInUser)
              reject(logger)
            }

          }
          else {
            let logger = new Logger(true, 'Failed To get Users Details', 500, null)
            reject(logger)
          }
        })
      } else {
        let logger = new Logger(true, 'userName or password parameter is missing', 400, null)
        reject(logger)
      }
    })
  }


  getProjects() {
    return this.db.collection('projects').snapshotChanges();
  }

  getAllProjectsFunction = () => {
    let allProjects: Array<any>;
    let allProjectsExtract = [];
    return new Promise((resolve, reject) => {
      this.getProjects().subscribe((result) => {
        if (result) {
          allProjects = result
          
          allProjects.forEach(element => {
            let project = element.payload.doc.data()
            allProjectsExtract.push(project)
          });

          let logger = new Logger(false, 'Projects Found', 200, allProjectsExtract)
          resolve(logger)
        }
        else {
          let logger = new Logger(true, 'Failed To get Projects', 500, null)
          reject(logger)
        }
      })
    })
  }

  getProjectByIdFunction = (projectId) => {
    let allProjects: Array<any>;
    let foundProject = null;
    let _projectFound = false;
    return new Promise((resolve, reject) => {
      this.getProjects().subscribe((result) => {
        if (result) {
          allProjects = result
          
          allProjects.forEach(element => {
            let project = element.payload.doc.data()
            if(project.projectId == projectId){
              _projectFound = true;
              foundProject = element;
            }
          });

          if(_projectFound == true){
            let logger = new Logger(false, 'Project Found with given Id', 200, foundProject)
            resolve(logger)
          }
          else{
            let logger = new Logger(true, 'Failed To found Project with given Id', 500, null)
            reject(logger)
          }
        }
        else {
          let logger = new Logger(true, 'Failed To get Projects', 500, null)
          reject(logger)
        }
      })
    })
  }

  addProject(value){
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    console.log(userDetails);
    
    return this.db.collection('projects').add({
      projectClient: value.projectClient,
      projectPhoto:value.projectPhoto,
      projectTitle:value.projectTitle,
      createdBy:userDetails.userName,
      createdDate:Date.now(),
      updatedBy:userDetails.userName,
      updatedDate:Date.now(),
      projectId: this.randomString(12)
    });
  }

  updateProject(projectId,value){
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    console.log(userDetails);
    
    return this.db.collection('projects').doc(projectId).set({
      projectClient: value.projectClient,
      projectPhoto:value.projectPhoto,
      projectTitle:value.projectTitle,
      updatedDate:Date.now(),
      updatedBy:userDetails.userName,
      createdDate:value.createdDate,
      createdBy:value.createdBy,
      projectId: value.projectId

    });
  }

  deleteProjectByIdFunction(projectId){
    return this.db.collection('projects').doc(projectId).delete();
  }

  
  getEnquiries() {
    return this.db.collection('enquiries').snapshotChanges();
  }
  getAllEnquiriesFunction = () => {
    let allEnquiries: Array<any>;
    let allEnquiriesExtract = [];
    return new Promise((resolve, reject) => {
      this.getEnquiries().subscribe((result) => {
        if (result) {
          allEnquiries = result
          
          allEnquiries.forEach(element => {
            let project = element.payload.doc.data()
            allEnquiriesExtract.push(project)
          });

          let logger = new Logger(false, 'Enquiries Found', 200, allEnquiriesExtract)
          resolve(logger)
        }
        else {
          let logger = new Logger(true, 'Failed To get Enquiries', 500, null)
          reject(logger)
        }
      })
    })
  }

  randomString(length) {
    var result = '';
    for (var i = length; i > 0; --i) result += this.chars[Math.floor(Math.random() * this.chars.length)];
    return result;
  }

}
