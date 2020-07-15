import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError : any;
  showSpinner: boolean = false;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(private authSetup: AuthserviceService, 
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
    this.authSetup.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  loginUser(frm) {
    this.showSpinner = true;
    //this.authSetup.login(frm.value.email, frm.value.password);
    this.afAuth.signInWithEmailAndPassword(frm.value.email, frm.value.password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userInfo => {
        this.showSpinner = false
        this.router.navigate(['/admin']),
        console.log(userInfo)
      })
  }

}
