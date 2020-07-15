import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user: firebase.User;

  constructor(private authSetup: AuthserviceService, 
              private router: Router) { }

  ngOnInit(): void {
    this.authSetup.getUserState()
      .subscribe( user => {
        this.user = user;
      })
    this.router.navigate(['/admin/profile']);
  }

  logout() {
    this.authSetup.logout();
    this.router.navigate(['/login']);
  }


}
