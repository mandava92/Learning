import { Component, OnInit } from '@angular/core';
import { StudentTrainings } from 'src/app/Models/student-trainings';

@Component({
  selector: 'app-approval-trainings',
  templateUrl: './approval-trainings.component.html',
  styleUrls: ['./approval-trainings.component.css']
})
export class ApprovalTrainingsComponent implements OnInit {

  approvals : StudentTrainings[] = [];
  displayedColumns: string[] = ['courseName', 'batchName','studentName','action'];
  pushData:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getApprovalRatings();
  }

  getApprovalRatings() {
    let st = new StudentTrainings();
    st.batchName = "Morning";
    st.courseName = "UI Complete Basics";
    st.userName = "Kiran";
    this.approvals.push(st);
  }

  approveTraining(element) {

  }

  rejectTraining(element) {

  }

}
