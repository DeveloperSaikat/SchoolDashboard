import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authError : any;
  

  constructor(private authSetup: AuthserviceService) { }

  ngOnInit(): void {
    this.authSetup.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  createUser(frm) {
    this.authSetup.createUser(frm.value);
  }

}
