import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TraineeService } from './dashboard/trainee/trainee.service';
import { AddCourseComponent } from './admin-course/add-course/add-course.component';
import { EditCourseComponent } from './admin-course/edit-course/edit-course.component';
import { ListCourseComponent } from './admin-course/list-course/list-course.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';


const routes: Routes = [
  {path:"",component: LoginComponent},
  {path: "register", component : RegisterComponent} ,
  {path: "login",component : LoginComponent},
  {path: "ratings", component: RatingsComponent},
  {path: "addCourse", component: AddCourseComponent},
  {path: "editCourse", component:EditCourseComponent},
  {path: "listCourse", component:ListCourseComponent},
  {path: "course", component:AdminCourseComponent},
  {path: "dashboard",loadChildren : () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
