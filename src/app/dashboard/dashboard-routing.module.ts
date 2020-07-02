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


const routes: Routes = [
  {
    path:"",component: DashboardComponentComponent,   
    children: [
    {
      path: "trainee",
      component : TraineeComponent,
      //canActivate : [RoleGuardService],
       children: [

          {path: "completedTrainings", component: TraineeCompletedComponent},
          {path: "searchTrainings", component: TraineeSearchComponent},
          {path: "currentTrainings", component: TraineeInprogressComponent},
          {path: "", component:TraineeInprogressComponent}
       ]
    },
    {
      path:"admin",
      component : AdminComponent,
      children : [
        {path: "course", component:AdminCourseComponent, children : [
          {path: "addCourse", component: AddCourseComponent},
          {path: "editCourse", component:EditCourseComponent},
          {path: "listCourse", component:ListCourseComponent},
          {path: "", component:ListCourseComponent}
        ]}
      ]
    },
    {
      path:"mentor",
      component: MentorComponent,
      children : [
        {path: "searchTrainings", component: SearchTrainingsComponent},
        {path: "currentTrainings", component : ProgressTrainingsComponent},
        {path : "completedTrainings", component : CompletedTrainingsComponent},
        {path : "approvalTrainings", component: ApprovalTrainingsComponent}
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
