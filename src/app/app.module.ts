import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGeneralPageComponent } from './admin-general-page/admin-general-page.component';
import { AdminEntityComponent } from './admin-entity/admin-entity.component';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherDataEntryComponent } from './teacher-data-entry/teacher-data-entry.component';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherMarksComponent } from './teacher-marks/teacher-marks.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { TeacherCreationComponent } from './teacher-creation/teacher-creation.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AdminGeneralPageComponent,
    AdminEntityComponent,
    LoadingComponentComponent,
    TeacherProfileComponent,
    TeacherDataEntryComponent,
    TeacherMainComponent,
    TeacherMarksComponent,
    StudentMainComponent,
    StudentProfileComponent,
    StudentDataComponent,
    TeacherCreationComponent,
    StudentCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
