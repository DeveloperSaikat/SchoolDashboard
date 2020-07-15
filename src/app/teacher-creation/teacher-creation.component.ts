import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-creation',
  templateUrl: './teacher-creation.component.html',
  styleUrls: ['./teacher-creation.component.css']
})
export class TeacherCreationComponent implements OnInit {

  constructor(private authSetup: AuthserviceService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSetup.logout();
    this.router.navigate(['/login']);
  }

}
