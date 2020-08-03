import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { Course } from 'src/app/Models/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { SkillService } from 'src/app/dashboard/admin/admin-skill/skill.service';
import { BatchService } from 'src/app/dashboard/admin/admin-batch/batch.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CourseService } from 'src/app/dashboard/admin/admin-course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class MentorAddCourseComponent implements OnInit {

  
  skills: Skill[] = [];
  batches: Batch[] = [];
  course;
  courseId;

  constructor(
    private authenticationService: AuthService,
    private notification: NotificationService,
    private route:Router,
    private skillService: SkillService,
    private batchService: BatchService,
    private formBuilder: FormBuilder, private router:ActivatedRoute,
    private courseService:CourseService) { }
   
  courseForm = this.formBuilder.group({
    courseName : ["", Validators.required],
    skillId : ["",Validators.required],
    batchId : ["", Validators.required],
    mentorShare : ['', Validators.required],
    studentFee : ['',Validators.required]
  }); 

  ngOnInit(): void {
    this.loadSkills();
    this.loadBatches();
   
  }

  loadSkills() {
    this.skillService.getSkills().subscribe(
                data => {
                  this.skills = data
                })
  }

  loadBatches() {
    this.batchService.getBatches().subscribe(
      data => {
        this.batches = data
      })

  }

  createCourse() {
    this.course =this.courseForm.value;
    console.log(this.course);
    const currentUser = this.authenticationService.currentUserValue.userName;
    this.course.userName = currentUser;
    this.courseService.updateCourse(this.course).subscribe(
      data =>{
        this.course = data;
        this.notification.showSuccess("Success","Data saved successfully")
        // this.route.navigate(['/mentor/course/']);
      } 
    );
  }

}
