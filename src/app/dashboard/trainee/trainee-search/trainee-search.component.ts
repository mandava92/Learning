import { Component, OnInit } from '@angular/core';
import { StudentTrainings } from 'src/app/Models/student-trainings';
import { ActivatedRoute } from '@angular/router';
import { TraineeService } from '../trainee.service';
import { TraineeApproval } from 'src/app/Models/trainee-approval-status';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-trainee-search',
  templateUrl: './trainee-search.component.html',
  styleUrls: ['./trainee-search.component.css']
})
export class TraineeSearchComponent implements OnInit {
  courses;
  searchTrainings: StudentTrainings[] = [];
  constructor(private route: ActivatedRoute,
    private trainingService: TraineeService,
    private notification: NotificationService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  proposeTraining(courseId:number,userName) {
    console.log(courseId);
    let courseMapping:any={};
    courseMapping.courseId =courseId;
    courseMapping.courseApprovalStatus = TraineeApproval.PENDING;
    courseMapping.userName =userName;
    this.trainingService.proposeTrainings(courseMapping).subscribe(
      data =>{
        let index=this.courses.findIndex(item => item.courseId == data.courseId);
        this.courses.splice(index,1);
        this.notification.showSuccess("Success","Data updated successfully")
      } 
    );
  }

  getAllCourses() {
    this.route.data.subscribe(
      data =>{
        console.log('Data :', data);
        this.courses = data.courses;
      } 
    );
  }

  getTrainings(){
    let st = new StudentTrainings();
    st.trainerCourseId =123;
    st.courseName= "java";
    st.batchName = "weekend";
    let st1 = new StudentTrainings();
    st1.trainerCourseId =1234;
    st1.courseName= "java";
    st1.batchName = "weekend";
    this.searchTrainings.push(st1);
    this.searchTrainings.push(st);

    this.searchTrainings = this.searchTrainings.filter(
      data => data.trainerCourseId != 123
    )
  }

}
