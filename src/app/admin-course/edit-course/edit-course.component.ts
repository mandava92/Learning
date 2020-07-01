import { Component, OnInit } from '@angular/core';
import { BatchService } from 'src/app/admin-batch/batch.service';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { SkillService } from 'src/app/admin-skill/skill.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { createAotUrlResolver } from '@angular/compiler';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  skills: Skill[] = [];
  batches: Batch[] = [];

  constructor(private skillService: SkillService,
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
    console.log();
    this.getCourseById(this.router.snapshot.params['id']);
    // this.courseService.behaviour.subscribe(
    //   data => {
    //     console.log(data);
    //     this.courseForm.patchValue(data);
    //   }
    // )    
  }

  getCourseById(id:number) {
    this.courseService.getCourseById(id);
  }

  loadSkills() {
    this.skillService.getSkills().subscribe(
                data => {
                  this.skills = data;
                },
                error => {
                  let skill = new Skill();
                  skill.id = 1;
                  skill.name = "Java";
                  this.skills.push(skill);
                })
  }

  loadBatches() {
    this.batchService.getBatches().subscribe(
      data => {
        this.batches = data;
      },
      error => {
        let skill = new Batch();
        skill.id = 1;
        skill.name = "Weekend";                  
        this.batches.push(skill);
      })

  }

  updateCourse() {
    console.log(this.courseForm.value);
    this.courseService.updateCourse(this.courseForm.value);
  }

}
