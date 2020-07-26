import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { Course } from 'src/app/Models/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { SkillService } from '../../admin-skill/skill.service';
import { BatchService } from '../../admin-batch/batch.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

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
    this.courseService.updateCourse(this.course).subscribe(
      data =>{
        this.course = data;
        this.notification.showSuccess("Success","Data saved successfully")
        this.courseForm.reset();
      } 
    );
  }

}
