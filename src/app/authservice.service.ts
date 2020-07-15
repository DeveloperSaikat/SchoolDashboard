import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  user: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFirestore,
    private router: Router
  ) { }

  getUserState() {
    console.log(this.afAuth.authState);
    return this.afAuth.authState
  }
  /*
  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userInfo => {
        this.check = false,
        this.router.navigate(['/admin']),
        console.log(userInfo)
      })
  }
*/
  createUser(newUser){
    this.afAuth.createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then(
            userInfo =>{
              this.user = newUser;
              console.log(userInfo);
              userInfo.user.updateProfile( {
                displayName: newUser.adminName
              });

              this.insertUserData(userInfo)
              .then(()=>{
                this.router.navigate(['/admin']),
                alert("Success");
                
              })
            })
            .catch(
              (err)=>{
                this.eventAuthError.next(err),
                console.log(err)
              }
            )
  }

  insertUserData(userData: firebase.auth.UserCredential){
    return this.afDb.collection("Admins").doc(userData.user.uid).set({
      name: this.user.adminName,
      email: this.user.email,
      password: this.user.password
    })
  }

  createATeacher(newTeacher){
      this.afDb.collection("Teachers").doc(newTeacher.eid).set({
        employee_id: newTeacher.eid,
        fname: newTeacher.firstName,
        lname: newTeacher.lastName,
        subject: newTeacher.subjects,
        email: newTeacher.email
      })
      .then(()=> console.log("Success"))
      .catch(
        (err)=>{
          this.eventAuthError.next(err),
          console.log(err)
        }
      )
  }


  createAnEvent(newEvent){
    console.log(newEvent.eventName);
    this.afDb.collection("Event").doc(newEvent.eventName).set({
      eventName: newEvent.eventName,
      eventLocation : newEvent.eventLoc,
      fromDate: newEvent.fromDt,
      endDate: newEvent.toDt
    })
    .then(()=> console.log("Success"))
    .catch(
      (err)=>{
        this.eventAuthError.next(err),
        console.log(err)
      }
    )
  }


  logout() {
    return this.afAuth.signOut();
  }

}
