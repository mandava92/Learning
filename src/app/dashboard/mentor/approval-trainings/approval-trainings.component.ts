import { Component, OnInit } from '@angular/core';
import { StudentTrainings } from 'src/app/Models/student-trainings';
import { CourseService } from '../../admin/admin-course/course.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TraineeApproval } from 'src/app/Models/trainee-approval-status';
import { TraineeService } from '../../trainee/trainee.service';
import { NotificationService } from 'src/app/notification.service';
import { TrainingEnrollment } from 'src/app/Models/training-enrollment';

@Component({
  selector: 'app-approval-trainings',
  templateUrl: './approval-trainings.component.html',
  styleUrls: ['./approval-trainings.component.css']
})
export class ApprovalTrainingsComponent implements OnInit {

  approvals  = [];
  displayedColumns: string[] = ['courseName', 'batchName','studentName','action'];
  pushData:boolean = false;

  constructor(private authService: AuthService,
    private service: CourseService,
    private trainingService: TraineeService,
    private notification: NotificationService) { }

  ngOnInit(): void {
    // this.getApprovalRatings();
    this.getPendingTrainings();
  }



  getPendingTrainings(){
    let userId:Number;
    this.service.allPendingApprovalCourses(this.authService.currentUserValue.userName)
                        .subscribe(
                          data => {
                            console.log(data);
                            this.approvals = data;    
                            this.getAllTraningEnrollMentRecords(this.approvals)
                          }
                        );
  }

  getAllTraningEnrollMentRecords(course){
    let enrollMents:TrainingEnrollment[] =[];
    course.forEach(function (value) {
      let arry = value.trainees.filter(item => item.courseApprovalStatus == TraineeApproval.PENDING);
      arry.forEach(function (traingEnrollMent) {
        traingEnrollMent.courseName = value.courseName;
        traingEnrollMent.batchName = value.batchName;
        enrollMents.push(traingEnrollMent)
        
      });
      
    }); 
    console.log(enrollMents);
    this.approvals =enrollMents;
 
  }


  approval(element,approval) {
    if(approval =="A"){
      approval=TraineeApproval.APPROVED;
    }else{
      approval=TraineeApproval.REJECTED;
    }
    element.courseApprovalStatus = approval;
    console.log(element);
    // let courseMapping:any={};
    // courseMapping.courseId =courseId;
    // courseMapping.courseApprovalStatus = approval;
    // courseMapping.userName =userName;
    // courseMapping.id=27;
    this.trainingService.updateTrainingApprovalStatus(element).subscribe(
      data =>{
        let index=this.approvals.findIndex(item => item.id == data.id);
        this.approvals.splice(index,1);
        this.notification.showSuccess("Success","Data updated successfully")
      } 
    );
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
