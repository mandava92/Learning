import { Component, OnInit } from '@angular/core';
import { MentorTrainings } from 'src/app/Models/mentor-trainings';

@Component({
  selector: 'app-completed-trainings',
  templateUrl: './completed-trainings.component.html',
  styleUrls: ['./completed-trainings.component.css']
})
export class CompletedTrainingsComponent implements OnInit {

  completedTrainings: MentorTrainings[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCompletedTrainings();
    
  }

  getCompletedTrainings() {
    let ct = new MentorTrainings();
    ct.courseName = "Complete Java";
    ct.batchName = "Weekend";
    ct.ratings = 4;
    ct.totalNoOfStudents = 10;
    ct.payment = 30000;
    this.completedTrainings.push(ct);
    
  }

}
