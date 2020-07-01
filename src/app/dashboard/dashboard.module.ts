import { NgModule } from '@angular/core';
import { DashboardComponentComponent } from './dashboard-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardRouter } from './dashboard-routing.module';
import { TraineeComponent } from './trainee/trainee.component';
import { TraineeInprogressComponent } from './trainee/trainee-inprogress/trainee-inprogress.component';
import { TraineeSearchComponent } from './trainee/trainee-search/trainee-search.component';
import { TraineeCompletedComponent } from './trainee/trainee-completed/trainee-completed.component';
import { SharedModule } from '../shared.module';
import { SharedGeneralModule } from '../shared-general.module';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminSkillComponent } from './admin/admin-skill/admin-skill.component';
import { AdminBatchComponent } from './admin/admin-batch/admin-batch.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { AddCourseComponent } from './admin/admin-course/add-course/add-course.component';
import { ListCourseComponent } from './admin/admin-course/list-course/list-course.component';
import { EditCourseComponent } from './admin/admin-course/edit-course/edit-course.component';
import { CourseComponent } from '../Models/course/course.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RatingsComponent } from '../ratings/ratings.component';

@NgModule({
  declarations: [DashboardComponentComponent,
    HeaderComponent,
    FooterComponent,
    TraineeComponent,
    TraineeInprogressComponent,
    TraineeSearchComponent,
    TraineeCompletedComponent,
    AdminComponent,
    AdminSkillComponent,
    AdminBatchComponent,
    AdminCourseComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent,
    CourseComponent
    
    // RatingsComponent
  ],
  imports: [
    CommonModule,
    SharedGeneralModule,
    SharedModule,
    DashboardRouter
    
  ]
})
export class DashboardModule { }
