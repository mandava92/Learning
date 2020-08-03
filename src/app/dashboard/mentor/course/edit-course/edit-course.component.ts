import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { createAotUrlResolver } from '@angular/compiler';
import { NotificationService } from 'src/app/notification.service';
import { SkillService } from 'src/app/dashboard/admin/admin-skill/skill.service';
import { BatchService } from 'src/app/dashboard/admin/admin-batch/batch.service';
import { CourseService } from 'src/app/dashboard/admin/admin-course/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class MentorEditCourseComponent implements OnInit {
  skills: Skill[] = [];
  batches: Batch[] = [];
  course;
  courseId;
  version;

  constructor(private notification: NotificationService,
    private skillService: SkillService,
    private batchService: BatchService,
    private formBuilder: FormBuilder, private route:ActivatedRoute,
    private courseService:CourseService,
    private router: Router
   ) { }
   
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
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log(this.courseId)
    // console.log(this.router.snapshot.params['id'])
    this.getCourseById(+this.courseId);
    // this.courseService.behaviour.subscribe(
    //   data => {
    //     console.log(data);
    //     this.courseForm.patchValue(data);
    //   }
    // )    
  }

  updateCourseValue() {
    this.courseForm.setValue({
      batchId: this.course.batchId,
      courseName: this.course.courseName,
      mentorShare:  this.course.mentorShare,
      skillId: this.course.skillId,
      studentFee: this.course.studentFee
    });
  }

  getCourseById(id:number) {
    this.courseService.getCourseById(id).subscribe(
      data => {
        this.course = data;
        this.version = this.course.version;
        this.updateCourseValue();
      }
    );
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

  updateCourse() {
  
    this.course =this.courseForm.value;
    this.course.id=this.courseId;
    this.course.version=this.version
    console.log(this.course);
    this.courseService.updateCourse(this.courseForm.value).subscribe(
      data =>{
        this.course = data;
        this.notification.showSuccess("Success","Data updated successfully")
        this.router.navigate(['/mentor/course']);
      } 
    );
  }

}
