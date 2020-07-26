import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { createAotUrlResolver } from '@angular/compiler';
import { CourseService } from '../course.service';
import { SkillService } from '../../admin-skill/skill.service';
import { BatchService } from '../../admin-batch/batch.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  skills: Skill[] = [];
  batches: Batch[] = [];
  course;
  courseId;

  constructor(private notification: NotificationService,
    private route: ActivatedRoute,
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
    console.log(this.course);
    this.courseService.updateCourse(this.courseForm.value).subscribe(
      data =>{
        this.course = data;
        this.notification.showSuccess("Success","Data updated successfully")
        this.updateCourseValue();
      } 
    );
  }

}
