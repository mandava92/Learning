import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: "register", component : RegisterComponent} ,
  {path: "login",component : LoginComponent},  
  {
    path:"",
    loadChildren : () => import("./dashboard/dashboard.module").then(module => module.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
