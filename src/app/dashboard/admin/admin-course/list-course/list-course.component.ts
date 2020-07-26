import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router:Router, private courseService:CourseService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.route.data.subscribe(
      
      data =>{
        console.log('Data :', data);
        this.courses = data.courses;
      } 
      
    );
  }
  //   let course1 = new Course();
  //   course1.id = 1;
  //   course1.batchId = 1;
  //   course1.skillId = 1;
  //   course1.courseName = "Advanced java";
  //   course1.mentorShare = 20;
  //   course1.studentFee = 100;
  //   course1.skillName = "Java";
  //   course1.batchName = "Weekend";

  //   this.courses.push(course1);
  // }

  deleteCourse(courseId) {
    console.log(courseId);
  }

  editCourse(courseId){
    console.log(courseId);
    this.courseService.behaviour.next(courseId);
    this.router.navigate(['/admin/course/editCourse', courseId ]);
  }

}
