import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CourseService } from '../course.service';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses : Course[] = [];
  skils: Skill[] = [];
  batches: Batch[]= [];
  displayedColumns: string[] = ['id', 'courseName', 'skillName','batchName','mentorShare','studentFee','action'];
  pushData:boolean = false;

  constructor(private router:Router, private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    let course1 = new Course();
    course1.id = 1;
    course1.batchId = 1;
    course1.skillId = 1;
    course1.courseName = "Advanced java";
    course1.mentorShare = 20;
    course1.studentFee = 100;
    course1.skillName = "Java";
    course1.batchName = "Weekend";

    this.courses.push(course1);
  }

  deleteCourse(course:Course) {
    console.log(course);
  }

  editCourse(course:Course){
    console.log(course);
    this.courseService.behaviour.next(course);
    this.router.navigate(['editCourse', { id: course.id }]);
  }

}
