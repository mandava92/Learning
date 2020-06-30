import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StudentTrainings } from '../trainee-inprogress/student-trainings';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-completed',
  templateUrl: './trainee-completed.component.html',
  styleUrls: ['./trainee-completed.component.css']
})
export class TraineeCompletedComponent implements OnInit {

  completedTrainings : StudentTrainings[] = [];
  
  constructor(private trainingService:TraineeService) { }

  ngOnInit(): void {
    this.getCompletedTrainings();
  }

  getCompletedTrainings() {
    this.trainingService.getCompletedTrainings(123)
                        .subscribe(
                          data => {
                            this.completedTrainings = data;
                          },
                          error => {
                            let st = new StudentTrainings();
                            st.trainingName = "test";
                            st.studentFee = 12.3;
                            st.ratings = 2.5;
                            this.completedTrainings.push(st);
                          }
                        );
  }

  cal(num){
    console.log("fghjkl");
    console.log(num);
  }

}
