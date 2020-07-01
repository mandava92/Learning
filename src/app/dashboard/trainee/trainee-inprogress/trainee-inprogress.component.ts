import { Component, OnInit } from '@angular/core';
import { StudentTrainings } from './student-trainings';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-inprogress',
  templateUrl: './trainee-inprogress.component.html',
  styleUrls: ['./trainee-inprogress.component.css']
})
export class TraineeInprogressComponent implements OnInit {

currentTrainings: StudentTrainings[] = [];
progress = 60;
  constructor(private traineeService: TraineeService) { }

  ngOnInit(): void {
    this.getCurrentTrainings();
  }

  getCurrentTrainings(){
    let userId:Number;
    this.traineeService.getCurrentTrainings(userId)
                        .subscribe(
                          data => {
                            this.currentTrainings = data;                            
                          },
                          error => {
                            let st =  new StudentTrainings();
                            st.trainingName = "Test";
                            st.batchName = "Test";
                            this.currentTrainings.push(st);
                          } 
                        );
  }



}
