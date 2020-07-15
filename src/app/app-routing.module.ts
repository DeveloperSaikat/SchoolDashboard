import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGeneralPageComponent } from './admin-general-page/admin-general-page.component';
import { AdminEntityComponent } from './admin-entity/admin-entity.component';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherDataEntryComponent } from './teacher-data-entry/teacher-data-entry.component';
import { TeacherMarksComponent } from './teacher-marks/teacher-marks.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { TeacherCreationComponent } from './teacher-creation/teacher-creation.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';


export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'admin', component: AdminHomeComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path: 'general',
        component: AdminGeneralPageComponent
      },
      {
        path: 'entity',
        component: AdminEntityComponent
      }
    ]},
    { path: 'teacher', component: TeacherMainComponent,
      children:[
        {
          path: 'profile',
          component: TeacherProfileComponent
        },
        {
          path: 'daily',
          component: TeacherDataEntryComponent
        },
        {
          path: 'marks',
          component: TeacherMarksComponent
        }
    ]},
    {
      path: 'student', component: StudentMainComponent,
      children:[
        {
          path: 'profile',
          component: StudentProfileComponent
        },
        {
          path: 'data',
          component: StudentDataComponent
        }
      ]
    },
    {
      path: 'teacherprofile' , component: TeacherCreationComponent
    },
    {
      path: 'studentprofile' , component: StudentCreationComponent
    }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
