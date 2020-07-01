import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeComponent } from './trainee/trainee.component';
import { DashboardComponentComponent } from './dashboard-component.component';
import { TraineeCompletedComponent } from './trainee/trainee-completed/trainee-completed.component';
import { TraineeSearchComponent } from './trainee/trainee-search/trainee-search.component';
import { TraineeInprogressComponent } from './trainee/trainee-inprogress/trainee-inprogress.component';


const routes: Routes = [
  {
    path:"",component: DashboardComponentComponent,
    children: [
    {
      path: "trainee",
      component : TraineeComponent,
       children: [
          {path: "completedTrainings", component: TraineeCompletedComponent},
          {path: "searchTrainings", component: TraineeSearchComponent},
          {path: "currentTrainings", component: TraineeInprogressComponent}
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
