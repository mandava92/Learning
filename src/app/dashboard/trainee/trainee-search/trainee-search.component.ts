import { Component, OnInit } from '@angular/core';
import { StudentTrainings } from '../trainee-inprogress/student-trainings';

@Component({
  selector: 'app-trainee-search',
  templateUrl: './trainee-search.component.html',
  styleUrls: ['./trainee-search.component.css']
})
export class TraineeSearchComponent implements OnInit {
  searchTrainings: StudentTrainings[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getTrainings();
  }

  proposeTraining(trainerCourseId:number) {
    console.log(trainerCourseId);
  }

  getTrainings(){
    let st = new StudentTrainings();
    st.trainerCourseId =123;
    st.trainingName= "java";
    st.batchName = "weekend";
    let st1 = new StudentTrainings();
    st1.trainerCourseId =1234;
    st1.trainingName= "java";
    st1.batchName = "weekend";
    this.searchTrainings.push(st1);
    this.searchTrainings.push(st);

    this.searchTrainings = this.searchTrainings.filter(
      data => data.trainerCourseId != 123
    )
  }

}
