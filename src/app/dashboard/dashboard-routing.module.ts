import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeComponent } from './trainee/trainee.component';
import { DashboardComponentComponent } from './dashboard-component.component';
import { TraineeCompletedComponent } from './trainee/trainee-completed/trainee-completed.component';
import { TraineeSearchComponent } from './trainee/trainee-search/trainee-search.component';
import { TraineeInprogressComponent } from './trainee/trainee-inprogress/trainee-inprogress.component';
import { AdminComponent } from './admin/admin.component';
import { AddCourseComponent } from './admin/admin-course/add-course/add-course.component';
import { EditCourseComponent } from './admin/admin-course/edit-course/edit-course.component';
import { ListCourseComponent } from './admin/admin-course/list-course/list-course.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { RoleGuardService } from '../auth/role-guard.service';
import { MentorComponent } from './mentor/mentor.component';
import { SearchTrainingsComponent } from './mentor/search-trainings/search-trainings.component';
import { CompletedTrainingsComponent } from './mentor/completed-trainings/completed-trainings.component';
import { ApprovalTrainingsComponent } from './mentor/approval-trainings/approval-trainings.component';
import { ProgressTrainingsComponent } from './mentor/progress-trainings/progress-trainings.component';
import {Role} from '../Models/role';
import { CourseResolverService } from './course-resolver.service';
import { CourseComponent } from './mentor/course/mentor-course.component';
import { MentorAddCourseComponent } from './mentor/course/add-course/add-course.component';
import { MentorEditCourseComponent } from './mentor/course/edit-course/edit-course.component';
import { MentorListCourseComponent } from './mentor/course/list-course/list-course.component';
import { TraineeCourseResolverService } from './trainee-course-resolver.service';
import { MentorCourseResolverService } from './mentor-course-resolver.service';


const routes: Routes = [
  {
    path:"",component: DashboardComponentComponent,   
    children: [
    {
      path: "trainee",
      component : TraineeComponent,
      data: { roles: [Role.Trainee] },
       children: [
        {path: "completedTrainings", component: TraineeCompletedComponent},
        {path: "searchTrainings", component: TraineeSearchComponent,
          resolve: {
            courses: TraineeCourseResolverService
          }
        },
        {path: "currentTrainings", component: TraineeCompletedComponent},
        {path: "pendingTrainings", component:TraineeInprogressComponent},
        
       ]
    },
    {
      path:"admin",
      data: { roles: [Role.Admin] },
      component : AdminComponent,
      //canActivate : [RoleGuardService],
      children : [
        {path: "course", component:AdminCourseComponent, children : [
        {path: "addCourse", component: AddCourseComponent},
        {path: "editCourse/:id", component:EditCourseComponent},
        {path: "", component:ListCourseComponent,
          resolve: {
            courses: CourseResolverService
          }
        }
        ]}
      ]
    },
    {
      path:"mentor",
      data: { roles: [Role.Mentor] },
     // canActivate: [RoleGuardService],
      component: MentorComponent,
      children : [
        // {path: "searchTrainings", component: SearchTrainingsComponent},
        {path: "currentTrainings", component : ProgressTrainingsComponent},
        {path: "completedTrainings", component : CompletedTrainingsComponent},
        {path: "approvalTrainings", component: ApprovalTrainingsComponent},
        {path: "searchTrainings", component:CourseComponent, children : [
          {path: "addCourse", component: MentorAddCourseComponent},
          {path: "editCourse/:id", component:MentorEditCourseComponent},
          {path: "", component:MentorListCourseComponent,
            resolve: {
              courses: MentorCourseResolverService
            }
          }
          ]}
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouter { }
