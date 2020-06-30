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
import { RatingsComponent } from '../ratings/ratings.component';

@NgModule({
  declarations: [DashboardComponentComponent,
    HeaderComponent,
    FooterComponent,
    TraineeComponent,
    TraineeInprogressComponent,
    TraineeSearchComponent,
    TraineeCompletedComponent,
    RatingsComponent
  ],
  imports: [
    //CommonModule,
    // CommonModule,
    SharedModule,
    DashboardRouter
    
  ]
})
export class DashboardModule { }
