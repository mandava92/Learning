import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../trainee.service';
import { StudentTrainings } from 'src/app/Models/student-trainings';
import { AuthService } from 'src/app/auth/auth.service';
import { CourseService } from '../../admin/admin-course/course.service';

@Component({
  selector: 'app-trainee-inprogress',
  templateUrl: './trainee-inprogress.component.html',
  styleUrls: ['./trainee-inprogress.component.css']
})
export class TraineeInprogressComponent implements OnInit {

currentTrainings: StudentTrainings[] = [];
progress = 60;
  constructor(private traineeService: TraineeService, private authService: AuthService,
    private service: CourseService,) { }

  ngOnInit(): void {
   this.getPendingTrainings();
  }

  getPendingTrainings(){
    let userId:Number;
    this.service.studentPendingApprovalCourses(this.authService.currentUserValue.userName)
                        .subscribe(
                          data => {
                            this.currentTrainings = data;                            
                          }
                        );
  }

  // getCurrentTrainings(){
  //   let userId:Number;
  //   this.traineeService.getCurrentTrainings(userId)
  //                       .subscribe(
  //                         data => {
  //                           this.currentTrainings = data;                            
  //                         },
  //                         error => {
  //                           let st =  new StudentTrainings();
  //                           st.courseName = "Test";
  //                           st.batchName = "Test";
  //                           this.currentTrainings.push(st);
  //                         } 
  //                       );
  // }



}
