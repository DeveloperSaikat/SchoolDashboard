import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  constructor(private authSetup: AuthserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSetup.logout();
    this.router.navigate(['/login']);
  }

}
