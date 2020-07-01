import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TraineeService } from './dashboard/trainee/trainee.service';



const routes: Routes = [
  {path:"",component: LoginComponent},
  {path: "register", component : RegisterComponent} ,
  {path: "login",component : LoginComponent},
  {path: "ratings", component: RatingsComponent},
  {path: "dashboard",loadChildren : () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
