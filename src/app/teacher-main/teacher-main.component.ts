import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.css']
})
export class TeacherMainComponent implements OnInit {

  constructor(private authSetup: AuthserviceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSetup.logout();
    this.router.navigate(['/login']);
  }

}
