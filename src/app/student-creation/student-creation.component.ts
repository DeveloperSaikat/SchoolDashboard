import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-student-creation',
  templateUrl: './student-creation.component.html',
  styleUrls: ['./student-creation.component.css']
})
export class StudentCreationComponent implements OnInit {

  constructor(private authSetup: AuthserviceService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSetup.logout();
    this.router.navigate(['/login']);
  }

}
