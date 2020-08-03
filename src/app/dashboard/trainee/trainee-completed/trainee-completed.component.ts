import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeService } from '../trainee.service';
import { StudentTrainings } from 'src/app/Models/student-trainings';
import { CourseService } from '../../admin/admin-course/course.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-trainee-completed',
  templateUrl: './trainee-completed.component.html',
  styleUrls: ['./trainee-completed.component.css']
})
export class TraineeCompletedComponent implements OnInit {

  
currentTrainings: StudentTrainings[] = [];
progress = 60;
  constructor(private traineeService: TraineeService, private authService: AuthService,
    private service: CourseService,) { }

  ngOnInit(): void {
   this.getApprovedTrainings();
  }

  getApprovedTrainings(){
    let userId:Number;
    this.service.studentCurrentCourses(this.authService.currentUserValue.userName)
                        .subscribe(
                          data => {
                            this.currentTrainings = data;                            
                          }
                        );
  }


}
